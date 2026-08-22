import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0148-university-streetwear", "family": "Streetwear", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "transparent-overlay|product-led|offset-cards|hours>credentials>availability>services>proof|cut-corners|sports-editorial", "industry": "university", "hero": "product-led", "navigation": "transparent-overlay", "layout": "offset-cards"};

export default function Template0148({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Pavilion University Programme");
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
  const proofPoints = ["Top 20 nationally ranked", "TEF Silver or Gold", "Graduate employment: 93%", "Small seminar groups"];
  const testimonial = "The placement year was the best decision I made. My dissertation supervisor introduced me to the company I now work for.";
  const team = [{"name": "Foxglove Lead", "role": "Principal / Lead"}, {"name": "Atlas Team", "role": "Client experience"}, {"name": "Clove Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["University programme / Project A", "University programme / Project B", "University programme / Project C", "University programme / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Study, research, and community organised around meaningful real-world contribution. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#55d8ff";
  return <main className="zp0148" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0148{--bg:#07111f;--fg:#e8f0ff;--primary:#55d8ff;--primary-fg:#050505;--secondary:#8477ff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:36px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0148 *{box-sizing:border-box}
.zp0148 a{color:inherit;text-decoration:none}
.zp0148 h1,.zp0148 h2,.zp0148 h3,.zp0148 blockquote{font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;text-wrap:balance}
.zp0148 img{max-width:100%;display:block}
.zp0148 button,.zp0148 a{-webkit-tap-highlight-color:transparent}
.zp0148 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0148 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0148 .nav strong{font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;font-size:18px}
.zp0148 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0148 .nav.overlay{position:absolute;inset:0 0 auto;background:linear-gradient(180deg,color-mix(in srgb,var(--bg) 76%,transparent),transparent);border:0}
.zp0148 .mobileMenu{display:none}
.zp0148 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0148 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0148 .eyebrow,.zp0148 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0148 h1{font-size:clamp(48px,6.9vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0148 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0148 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0148 .heroActions a,.zp0148 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0148 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0148 .visual,.zp0148 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0148 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0148 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:2px;right:-8%;top:-18%;transform:rotate(-4deg)}
.zp0148 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0148 .heroPhoto{object-fit:cover}
.zp0148 .productLedHero{grid-template-columns:1.1fr .9fr}
.zp0148 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0148 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0148 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0148 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0148 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0148 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0148 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0148 .serviceGrid p{color:var(--muted)}
.zp0148 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0148 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0148 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0148 details{border-top:1px solid var(--border);padding:20px 0}
.zp0148 details summary{font-weight:800;cursor:pointer}
.zp0148 details p{color:var(--muted);max-width:70ch}
.zp0148 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0148 .hours dl{margin:0}
.zp0148 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0148 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0148 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0148 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0148 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0148 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0148 .contact .eyebrow{color:var(--bg)}
.zp0148 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0148 .contactMeta{display:grid;gap:10px}
.zp0148 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0148 .section:nth-of-type(odd){padding-left:max(24px,calc((100vw - var(--max))/2 + 7vw))}
.zp0148 .heroCopy{animation:enter-147 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-147{from{opacity:0;transform:translateY(25px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0148 .hero{min-height:auto}
.zp0148 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0148 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0148 .nav nav{display:none}
.zp0148 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0148 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0148 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0148 .mobileMenu nav a{padding:10px 8px}
.zp0148 .hero,.zp0148 .productLedHero{grid-template-columns:1fr}
.zp0148 .section,.zp0148 .sectionTitle,.zp0148 .hours,.zp0148 .contact{grid-template-columns:1fr}
.zp0148 .section{display:block}}
@media(max-width:430px){.zp0148{font-size:16px}
.zp0148 .hero,.zp0148 .section,.zp0148 .contact{padding-left:18px;padding-right:18px}
.zp0148 .serviceGrid,.zp0148 .proof{grid-template-columns:1fr}
.zp0148 h1{font-size:clamp(42px,14vw,70px)}}

.zp0148 .heroActions a,.zp0148 .primary,.zp0148 .ctaBtn,.zp0148 .btnPrimary,.zp0148 .schedule>a,.zp0148 .newsletter>a{transition:all .2s ease}
.zp0148 .heroActions a:hover,.zp0148 .primary:hover,.zp0148 .ctaBtn:hover,.zp0148 .btnPrimary:hover{
  background:var(--fg);color:var(--bg);transform:skewX(-2deg)
}
.zp0148 nav a,.zp0148 .nav a,.zp0148 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0148 nav a:hover,.zp0148 .nav a:hover,.zp0148 .footer a:hover{
  color:var(--primary)
}
.zp0148 .serviceGrid article,.zp0148 .projectCard,.zp0148 .teamCard,.zp0148 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0148 .serviceGrid article:hover,.zp0148 .projectCard:hover,.zp0148 .teamCard:hover,.zp0148 .bentoCard:hover{
  transform:skewX(-1deg)
}
@media(prefers-reduced-motion:reduce){.zp0148 *,.zp0148 *::before,.zp0148 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0148 a,.zp0148 button,.zp0148 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav overlay"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero productLedHero">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">47</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="productTitle"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Schedule a consultation</a><a href="#services">Explore</a></div></div></div></section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Schedule a consultation</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Streetwear / offset-cards</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
