import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0011-dental-futurism", "family": "Futurism", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "statement-bar|split-image|press-led|programmes>timeline>services>proof>schedule>availability|capsule|editorial-serif", "industry": "dental", "hero": "split-image", "navigation": "statement-bar", "layout": "press-led"};

export default function Template0011({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Juniper Dental Practice");
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
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["GDC registered practitioners", "Digital X-rays, same session", "Transparent fee schedule", "Same-day emergency care"];
  const testimonial = "I had avoided dentists for years. The team here explained everything before touching anything — completely changed my experience.";
  const team = [{"name": "Slate Lead", "role": "Principal / Lead"}, {"name": "Signal Team", "role": "Client experience"}, {"name": "Mosaic Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Dental practice / Project A", "Dental practice / Project B", "Dental practice / Project C", "Dental practice / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Calm dentistry with clear explanations and time for questions. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#bdff4f";
  return <main className="zp0011" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0011{--bg:#111813;--fg:#f3f0dc;--primary:#bdff4f;--primary-fg:#050505;--secondary:#8aa376;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:32px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:32px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0011 *{box-sizing:border-box}
.zp0011 a{color:inherit;text-decoration:none}
.zp0011 h1,.zp0011 h2,.zp0011 h3,.zp0011 blockquote{font-family:Georgia, serif;text-wrap:balance}
.zp0011 img{max-width:100%;display:block}
.zp0011 button,.zp0011 a{-webkit-tap-highlight-color:transparent}
.zp0011 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0011 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0011 .nav strong{font-family:Georgia, serif;font-size:18px}
.zp0011 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0011 .nav.statement{display:grid;grid-template-columns:1fr auto 1fr}
.zp0011 .nav.statement>a{justify-self:end}
.zp0011 .mobileMenu{display:none}
.zp0011 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0011 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0011 .eyebrow,.zp0011 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0011 h1{font-size:clamp(48px,5.8vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0011 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0011 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0011 .heroActions a,.zp0011 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0011 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0011 .visual,.zp0011 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0011 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0011 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:32px;right:-8%;top:-18%;transform:rotate(-12deg)}
.zp0011 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0011 .heroPhoto{object-fit:cover}
.zp0011 .splitHero{grid-template-columns:1.15fr .85fr}
.zp0011 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0011 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0011 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0011 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0011 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0011 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0011 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0011 .serviceGrid p{color:var(--muted)}
.zp0011 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0011 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0011 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0011 details{border-top:1px solid var(--border);padding:20px 0}
.zp0011 details summary{font-weight:800;cursor:pointer}
.zp0011 details p{color:var(--muted);max-width:70ch}
.zp0011 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0011 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0011 .timeline article{padding:20px 0}
.zp0011 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0011 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0011 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0011 .contact .eyebrow{color:var(--bg)}
.zp0011 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0011 .contactMeta{display:grid;gap:10px}
.zp0011 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0011 .heroCopy{animation:enter-10 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-10{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0011 .hero{min-height:auto}
.zp0011 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0011 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0011 .nav nav{display:none}
.zp0011 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0011 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0011 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0011 .mobileMenu nav a{padding:10px 8px}
.zp0011 .hero,.zp0011 .splitHero{grid-template-columns:1fr}
.zp0011 .section,.zp0011 .sectionTitle,.zp0011 .contact{grid-template-columns:1fr}
.zp0011 .section{display:block}}
@media(max-width:430px){.zp0011{font-size:16px}
.zp0011 .hero,.zp0011 .section,.zp0011 .contact{padding-left:18px;padding-right:18px}
.zp0011 .serviceGrid,.zp0011 .proof,.zp0011 .programmes>div:last-child{grid-template-columns:1fr}
.zp0011 h1{font-size:clamp(42px,14vw,70px)}
.zp0011 .nav.statement{grid-template-columns:1fr auto}
.zp0011 .nav.statement>span:first-child{display:none}}

.zp0011 .heroActions a,.zp0011 .primary,.zp0011 .ctaBtn,.zp0011 .btnPrimary,.zp0011 .schedule>a,.zp0011 .newsletter>a{transition:all .2s ease}
.zp0011 .heroActions a:hover,.zp0011 .primary:hover,.zp0011 .ctaBtn:hover,.zp0011 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);box-shadow:0 0 20px color-mix(in srgb,var(--primary) 40%,transparent)
}
.zp0011 nav a,.zp0011 .nav a,.zp0011 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0011 nav a:hover,.zp0011 .nav a:hover,.zp0011 .footer a:hover{
  color:var(--primary)
}
.zp0011 .serviceGrid article,.zp0011 .projectCard,.zp0011 .teamCard,.zp0011 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0011 .serviceGrid article:hover,.zp0011 .projectCard:hover,.zp0011 .teamCard:hover,.zp0011 .bentoCard:hover{
  box-shadow:0 0 12px color-mix(in srgb,var(--primary) 30%,transparent)
}
@media(prefers-reduced-motion:reduce){.zp0011 *,.zp0011 *::before,.zp0011 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0011 a,.zp0011 button,.zp0011 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav statement"><span>Independent / Local / Established</span><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero splitHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Send an enquiry</a><a href="#services">Explore</a></div></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">10</span><div className="visualMark"/><small>{businessName}</small></div>}</section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Send an enquiry</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Futurism / press-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
