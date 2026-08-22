import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0154-university-retro-futurism", "family": "Retro Futurism", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "left-sidebar|product-demo|service-catalogue|security>faq>services>hours>proof|paper-sheet|retro-bookish", "industry": "university", "hero": "product-demo", "navigation": "left-sidebar", "layout": "service-catalogue"};

export default function Template0154({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Kindred University Programme");
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
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Rook Lead", "role": "Principal / Lead"}, {"name": "Northline Team", "role": "Client experience"}, {"name": "Aster Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["University programme / Project A", "University programme / Project B", "University programme / Project C", "University programme / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Study, research, and community organised around meaningful real-world contribution. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#81946f";
  return <main className="zp0154" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0154{--bg:#f4eee5;--fg:#302821;--primary:#81946f;--primary-fg:#050505;--secondary:#c55d4d;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:3px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:28px;background:var(--bg);color:var(--fg);font-family:Trebuchet MS, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0154 *{box-sizing:border-box}
.zp0154 a{color:inherit;text-decoration:none}
.zp0154 h1,.zp0154 h2,.zp0154 h3,.zp0154 blockquote{font-family:Bookman Old Style, Georgia, serif;text-wrap:balance}
.zp0154 img{max-width:100%;display:block}
.zp0154 button,.zp0154 a{-webkit-tap-highlight-color:transparent}
.zp0154 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0154 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0154 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0154 .mobileMenu{display:none}
.zp0154:has(.navRail)>.hero,.zp0154:has(.navRail)>.section,.zp0154:has(.navRail)>.contact,.zp0154:has(.navRail)>.footer{margin-left:190px}
.zp0154 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0154 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0154 .eyebrow,.zp0154 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0154 h1{font-size:clamp(48px,7.45vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0154 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0154 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0154 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0154 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0154 .visual,.zp0154 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0154 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0154 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:3px;right:-8%;top:-18%;transform:rotate(-16deg)}
.zp0154 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0154 .heroPhoto{object-fit:cover}
.zp0154 .productHero{grid-template-columns:0.85fr 1.15fr}
.zp0154 .productFrame{padding:14px;border:var(--line) solid var(--border);border-radius:calc(var(--radius) + 8px);background:var(--surface)}
.zp0154 .productBar{height:24px;border-bottom:1px solid var(--border);margin-bottom:14px}
.zp0154 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0154 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0154 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0154 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0154 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0154 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0154 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0154 .serviceGrid p{color:var(--muted)}
.zp0154 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0154 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0154 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0154 .faqList{max-width:900px;margin-left:auto}
.zp0154 details{border-top:1px solid var(--border);padding:20px 0}
.zp0154 details summary{font-weight:800;cursor:pointer}
.zp0154 details p{color:var(--muted);max-width:70ch}
.zp0154 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0154 .hours dl{margin:0}
.zp0154 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0154 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0154 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0154 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0154 .contact .eyebrow{color:var(--bg)}
.zp0154 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0154 .contactMeta{display:grid;gap:10px}
.zp0154 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0154 .heroCopy{animation:enter-153 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-153{from{opacity:0;transform:translateY(31px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0154 .hero{min-height:auto}
.zp0154 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0154 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0154 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0154 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0154 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0154 .mobileMenu nav a{padding:10px 8px}
.zp0154 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0154:has(.navRail)>.hero,.zp0154:has(.navRail)>.section,.zp0154:has(.navRail)>.contact,.zp0154:has(.navRail)>.footer{margin-left:0}
.zp0154 .hero,.zp0154 .productHero{grid-template-columns:1fr}
.zp0154 .section,.zp0154 .sectionTitle,.zp0154 .hours,.zp0154 .security,.zp0154 .contact{grid-template-columns:1fr}
.zp0154 .section{display:block}}
@media(max-width:430px){.zp0154{font-size:16px}
.zp0154 .hero,.zp0154 .section,.zp0154 .contact{padding-left:18px;padding-right:18px}
.zp0154 .serviceGrid,.zp0154 .proof{grid-template-columns:1fr}
.zp0154 h1{font-size:clamp(42px,14vw,70px)}}

.zp0154 .heroActions a,.zp0154 .primary,.zp0154 .ctaBtn,.zp0154 .btnPrimary,.zp0154 .schedule>a,.zp0154 .newsletter>a{transition:all .2s ease}
.zp0154 .heroActions a:hover,.zp0154 .primary:hover,.zp0154 .ctaBtn:hover,.zp0154 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);box-shadow:0 0 20px color-mix(in srgb,var(--primary) 40%,transparent)
}
.zp0154 nav a,.zp0154 .nav a,.zp0154 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0154 nav a:hover,.zp0154 .nav a:hover,.zp0154 .footer a:hover{
  color:var(--primary)
}
.zp0154 .serviceGrid article,.zp0154 .projectCard,.zp0154 .teamCard,.zp0154 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0154 .serviceGrid article:hover,.zp0154 .projectCard:hover,.zp0154 .teamCard:hover,.zp0154 .bentoCard:hover{
  box-shadow:0 0 12px color-mix(in srgb,var(--primary) 30%,transparent)
}
@media(prefers-reduced-motion:reduce){.zp0154 *,.zp0154 *::before,.zp0154 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0154 a,.zp0154 button,.zp0154 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero productHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Start free</a><a href="#services">Explore</a></div></div><div className="productFrame"><div className="productBar"/>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">53</span><div className="visualMark"/><small>{businessName}</small></div>}</div></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Start free</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Retro Futurism / service-catalogue</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
