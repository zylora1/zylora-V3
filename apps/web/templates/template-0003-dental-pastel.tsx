import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0003-dental-pastel", "family": "Pastel", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "split-logo|diagonal-cut|story-first|proof>services>packages>hours>integrations>faq>values|inset-panel|poster", "industry": "dental", "hero": "diagonal-cut", "navigation": "split-logo", "layout": "story-first"};

export default function Template0003({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Harbor Dental Practice");
  const headline = String(content.headline || "Calm dentistry with clear explanations and time for questions.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Preventive exams", "Restorative dentistry", "Invisalign consultations", "Emergency appointments", "Cosmetic dentistry"];
  const industryLabel = "Dental practice";
  const serviceNotes = ["Gentle, thorough care explained step by step so you always know what to expect.", "Modern techniques with minimal discomfort — your comfort guides every decision.", "Clear treatment plans with transparent costs before any work begins.", "Emergency slots kept available every day for urgent dental needs.", "Cosmetic results that enhance your smile without erasing what makes it yours."];
  const proofPoints = ["GDC registered practitioners", "Digital X-rays, same session", "Transparent fee schedule", "Same-day emergency care"];
  const testimonial = "I had avoided dentists for years. The team here explained everything before touching anything — completely changed my experience.";
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Cedar Lead", "role": "Principal / Lead"}, {"name": "Arc Team", "role": "Client experience"}, {"name": "Slate Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Dental practice / Project A", "Dental practice / Project B", "Dental practice / Project C", "Dental practice / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Calm dentistry with clear explanations and time for questions. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#29c7b8";
  return <main className="zp0003" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0003{--bg:#081415;--fg:#eefafa;--primary:#29c7b8;--primary-fg:#050505;--secondary:#e5b55f;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:16px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:32px;background:var(--bg);color:var(--fg);font-family:Helvetica Neue, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0003 *{box-sizing:border-box}
.zp0003 a{color:inherit;text-decoration:none}
.zp0003 h1,.zp0003 h2,.zp0003 h3,.zp0003 blockquote{font-family:Impact, Arial Black, sans-serif;text-wrap:balance}
.zp0003 img{max-width:100%;display:block}
.zp0003 button,.zp0003 a{-webkit-tap-highlight-color:transparent}
.zp0003 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0003 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0003 .nav strong{font-family:Impact, Arial Black, sans-serif;font-size:18px}
.zp0003 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0003 .mobileMenu{display:none}
.zp0003 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0003 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0003 .eyebrow,.zp0003 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0003 h1{font-size:clamp(48px,6.9vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0003 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0003 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0003 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0003 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0003 .visual,.zp0003 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0003 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0003 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:16px;right:-8%;top:-18%;transform:rotate(-8deg)}
.zp0003 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0003 .heroPhoto{object-fit:cover}
.zp0003 .diagonalHero{grid-template-columns:1.15fr .85fr}
.zp0003 .diagonalVisual{clip-path:polygon(22% 0,100% 0,78% 100%,0 100%)}
.zp0003 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0003 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0003 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0003 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0003 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0003 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0003 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0003 .serviceGrid p{color:var(--muted)}
.zp0003 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0003 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0003 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0003 .faqList{max-width:900px;margin-left:auto}
.zp0003 details{border-top:1px solid var(--border);padding:20px 0}
.zp0003 details summary{font-weight:800;cursor:pointer}
.zp0003 details p{color:var(--muted);max-width:70ch}
.zp0003 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0003 .hours dl{margin:0}
.zp0003 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0003 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0003 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0003 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0003 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Impact, Arial Black, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0003 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0003 .packages>.sectionTitle{grid-column:1/-1}
.zp0003 .packages article{padding:24px;border:1px solid var(--border)}
.zp0003 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0003 .contact .eyebrow{color:var(--bg)}
.zp0003 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0003 .contactMeta{display:grid;gap:10px}
.zp0003 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0003 .heroCopy{animation:enter-2 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-2{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0003 .hero{min-height:auto}
.zp0003 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0003 .proof{grid-template-columns:1fr 1fr}
.zp0003 .packages{grid-template-columns:1fr 1fr}
.zp0003 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0003 .nav nav{display:none}
.zp0003 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0003 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0003 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0003 .mobileMenu nav a{padding:10px 8px}
.zp0003 .hero,.zp0003 .diagonalHero{grid-template-columns:1fr}
.zp0003 .section,.zp0003 .sectionTitle,.zp0003 .hours,.zp0003 .contact{grid-template-columns:1fr}
.zp0003 .section{display:block}}
@media(max-width:430px){.zp0003{font-size:16px}
.zp0003 .hero,.zp0003 .section,.zp0003 .contact{padding-left:18px;padding-right:18px}
.zp0003 .serviceGrid,.zp0003 .proof,.zp0003 .packages{grid-template-columns:1fr}
.zp0003 h1{font-size:clamp(42px,14vw,70px)}}

.zp0003 .heroActions a,.zp0003 .primary,.zp0003 .ctaBtn,.zp0003 .btnPrimary,.zp0003 .schedule>a,.zp0003 .newsletter>a{transition:all .2s ease}
.zp0003 .heroActions a:hover,.zp0003 .primary:hover,.zp0003 .ctaBtn:hover,.zp0003 .btnPrimary:hover{
  opacity:.85;transform:scale(1.02)
}
.zp0003 nav a,.zp0003 .nav a,.zp0003 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0003 nav a:hover,.zp0003 .nav a:hover,.zp0003 .footer a:hover{
  color:var(--primary)
}
.zp0003 .serviceGrid article,.zp0003 .projectCard,.zp0003 .teamCard,.zp0003 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0003 .serviceGrid article:hover,.zp0003 .projectCard:hover,.zp0003 .teamCard:hover,.zp0003 .bentoCard:hover{
  transform:translateY(-3px);box-shadow:0 8px 20px rgba(0,0,0,.08)
}
@media(prefers-reduced-motion:reduce){.zp0003 *,.zp0003 *::before,.zp0003 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0003 a,.zp0003 button,.zp0003 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav split"><nav><a href="#services">Services</a><a href="#proof">Proof</a></nav><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero diagonalHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Reserve a table</a><a href="#services">Explore</a></div></div><div className="diagonalVisual">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">02</span><div className="visualMark"/><small>{businessName}</small></div>}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Pastel / story-first</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
