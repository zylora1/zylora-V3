import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0070-wellness-high-contrast", "family": "High Contrast", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "mega-utility|cinematic-fullscreen|local-service-map|hours>faq>proof>materials>services|pill-controls|warm-editorial", "industry": "wellness", "hero": "cinematic-fullscreen", "navigation": "mega-utility", "layout": "local-service-map"};

export default function Template0070({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Cedar Wellness Studio");
  const headline = String(content.headline || "Restorative care with simple booking, transparent options, and a calm experience.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Massage therapy", "Recovery sessions", "Nutrition consults", "Breathwork", "Wellness memberships"];
  const industryLabel = "Wellness studio";
  const serviceNotes = ["Personalised programmes that fit around your work, sleep and lifestyle patterns.", "Evidence-informed practice — we explain the science behind every recommendation.", "Mind-body integration sessions that address stress, movement, and recovery together.", "Nutritional guidance grounded in practical, sustainable food choices.", "Group and one-to-one formats to match your preference for accountability."];
  const proofPoints = ["Certified practitioners", "Online and in-person", "Programme tracking included", "Community support group"];
  const testimonial = "I've tried other wellness programmes. This is the first one that actually asked how my life works before suggesting changes.";
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Vale Lead", "role": "Principal / Lead"}, {"name": "Civic Team", "role": "Client experience"}, {"name": "Oak & Tide Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Wellness studio / Project A", "Wellness studio / Project B", "Wellness studio / Project C", "Wellness studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Restorative care with simple booking, transparent options, and a calm experience. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#df567f";
  return <main className="zp0070" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0070{--bg:#fff4f4;--fg:#2b1721;--primary:#df567f;--primary-fg:#050505;--secondary:#5c7bd9;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:28px;--line:3px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:28px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0070 *{box-sizing:border-box}
.zp0070 a{color:inherit;text-decoration:none}
.zp0070 h1,.zp0070 h2,.zp0070 h3,.zp0070 blockquote{font-family:Palatino Linotype, Georgia, serif;text-wrap:balance}
.zp0070 img{max-width:100%;display:block}
.zp0070 button,.zp0070 a{-webkit-tap-highlight-color:transparent}
.zp0070 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0070 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0070 .nav strong{font-family:Palatino Linotype, Georgia, serif;font-size:18px}
.zp0070 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0070 .mobileMenu{display:none}
.zp0070 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0070 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0070 .eyebrow,.zp0070 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0070 h1{font-size:clamp(48px,8.0vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0070 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0070 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0070 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0070 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0070 .visual,.zp0070 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0070 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0070 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:28px;right:-8%;top:-18%;transform:rotate(8deg)}
.zp0070 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0070 .heroPhoto{object-fit:cover}
.zp0070 .cinematic{padding:0;min-height:100vh}
.zp0070 .cinematic>.heroPhoto,.zp0070 .cinematic>.visual{position:absolute;inset:0;width:100%;height:100%;border:0;border-radius:0;object-fit:cover}
.zp0070 .cinematic .shade{position:absolute;inset:0;background:linear-gradient(90deg,color-mix(in srgb,var(--bg) 90%,transparent),transparent 75%)}
.zp0070 .cinematic .heroCopy{padding:max(80px,8vw);align-self:end}
.zp0070 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0070 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0070 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0070 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0070 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0070 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0070 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0070 .serviceGrid p{color:var(--muted)}
.zp0070 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0070 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0070 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0070 .faqList{max-width:900px;margin-left:auto}
.zp0070 details{border-top:1px solid var(--border);padding:20px 0}
.zp0070 details summary{font-weight:800;cursor:pointer}
.zp0070 details p{color:var(--muted);max-width:70ch}
.zp0070 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0070 .hours dl{margin:0}
.zp0070 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0070 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0070 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0070 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0070 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0070 .contact .eyebrow{color:var(--bg)}
.zp0070 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0070 .contactMeta{display:grid;gap:10px}
.zp0070 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0070 .heroCopy{animation:enter-69 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-69{from{opacity:0;transform:translateY(27px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0070 .hero{min-height:auto}
.zp0070 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0070 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0070 .nav nav{display:none}
.zp0070 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0070 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0070 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0070 .mobileMenu nav a{padding:10px 8px}
.zp0070 .hero{grid-template-columns:1fr}
.zp0070 .section,.zp0070 .sectionTitle,.zp0070 .hours,.zp0070 .contact{grid-template-columns:1fr}
.zp0070 .section{display:block}}
@media(max-width:430px){.zp0070{font-size:16px}
.zp0070 .hero,.zp0070 .section,.zp0070 .contact{padding-left:18px;padding-right:18px}
.zp0070 .serviceGrid,.zp0070 .proof{grid-template-columns:1fr}
.zp0070 h1{font-size:clamp(42px,14vw,70px)}}

.zp0070 .heroActions a,.zp0070 .primary,.zp0070 .ctaBtn,.zp0070 .btnPrimary,.zp0070 .schedule>a,.zp0070 .newsletter>a{transition:all .2s ease}
.zp0070 .heroActions a:hover,.zp0070 .primary:hover,.zp0070 .ctaBtn:hover,.zp0070 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0070 nav a,.zp0070 .nav a,.zp0070 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0070 nav a:hover,.zp0070 .nav a:hover,.zp0070 .footer a:hover{
  color:var(--primary)
}
.zp0070 .serviceGrid article,.zp0070 .projectCard,.zp0070 .teamCard,.zp0070 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0070 .serviceGrid article:hover,.zp0070 .projectCard:hover,.zp0070 .teamCard:hover,.zp0070 .bentoCard:hover{
  box-shadow:0 0 0 3px var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0070 *,.zp0070 *::before,.zp0070 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0070 a,.zp0070 button,.zp0070 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav utility"><strong>{businessName}</strong><span>Open today</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero cinematic">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">69</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="shade"/><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Start free</a><a href="#services">Explore</a></div></div></section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Start free</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>High Contrast / local-service-map</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
