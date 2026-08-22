import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0015-dental-magazine", "family": "Magazine", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "vertical-rail|location-led|product-journey|testimonial>location>manifesto>services>case-study>materials>proof|soft-12|geometric", "industry": "dental", "hero": "location-led", "navigation": "vertical-rail", "layout": "product-journey"};

export default function Template0015({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Miller & Rowe Dental Practice");
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
  const testimonialName = "Pavilion client";
  const team = [{"name": "Signal Lead", "role": "Principal / Lead"}, {"name": "Mosaic Team", "role": "Client experience"}, {"name": "Kindred Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Dental practice / Project A", "Dental practice / Project B", "Dental practice / Project C", "Dental practice / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Calm dentistry with clear explanations and time for questions. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#b7ff31";
  return <main className="zp0015" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0015{--bg:#f2f2f2;--fg:#111111;--primary:#b7ff31;--primary-fg:#050505;--secondary:#808080;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:12px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:32px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0015 *{box-sizing:border-box}
.zp0015 a{color:inherit;text-decoration:none}
.zp0015 h1,.zp0015 h2,.zp0015 h3,.zp0015 blockquote{font-family:Century Gothic, Avenir, sans-serif;text-wrap:balance}
.zp0015 img{max-width:100%;display:block}
.zp0015 button,.zp0015 a{-webkit-tap-highlight-color:transparent}
.zp0015 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0015 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0015 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0015 .mobileMenu{display:none}
.zp0015:has(.navRail)>.hero,.zp0015:has(.navRail)>.section,.zp0015:has(.navRail)>.contact,.zp0015:has(.navRail)>.footer{margin-left:190px}
.zp0015 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0015 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0015 .eyebrow,.zp0015 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0015 h1{font-size:clamp(48px,8.0vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0015 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0015 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0015 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0015 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0015 .locationHero{grid-template-columns:1fr 1fr}
.zp0015 .mapPanel{min-height:430px;border:1px solid var(--border);position:relative;padding:24px;background:repeating-linear-gradient(45deg,transparent 0 28px,var(--border) 29px 30px)}
.zp0015 .mapDot{position:absolute;left:55%;top:46%;width:24px;aspect-ratio:1;background:var(--primary);border-radius:50%;box-shadow:0 0 0 18px color-mix(in srgb,var(--primary) 18%,transparent)}
.zp0015 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0015 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0015 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0015 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0015 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0015 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0015 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0015 .serviceGrid p{color:var(--muted)}
.zp0015 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0015 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0015 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0015 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0015 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0015 .testimonial>div{align-self:end}
.zp0015 .testimonial span{display:block;opacity:.7}
.zp0015 details{border-top:1px solid var(--border);padding:20px 0}
.zp0015 details summary{font-weight:800;cursor:pointer}
.zp0015 details p{color:var(--muted);max-width:70ch}
.zp0015 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0015 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0015 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0015 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0015 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0015 .projects article:nth-child(2){transform:translateY(32px)}
.zp0015 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0015 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0015 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0015 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Century Gothic, Avenir, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0015 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0015 .contact .eyebrow{color:var(--bg)}
.zp0015 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0015 .contactMeta{display:grid;gap:10px}
.zp0015 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0015 .heroCopy{animation:enter-14 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-14{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0015 .hero{min-height:auto}
.zp0015 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0015 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0015 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0015 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0015 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0015 .mobileMenu nav a{padding:10px 8px}
.zp0015 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0015:has(.navRail)>.hero,.zp0015:has(.navRail)>.section,.zp0015:has(.navRail)>.contact,.zp0015:has(.navRail)>.footer{margin-left:0}
.zp0015 .hero,.zp0015 .locationHero{grid-template-columns:1fr}
.zp0015 .section,.zp0015 .sectionTitle,.zp0015 .location,.zp0015 .contact{grid-template-columns:1fr}
.zp0015 .testimonial{grid-template-columns:1fr}
.zp0015 .projects .projectGrid{grid-template-columns:1fr}
.zp0015 .projects article:nth-child(2){transform:none}
.zp0015 .section{display:block}}
@media(max-width:430px){.zp0015{font-size:16px}
.zp0015 .hero,.zp0015 .section,.zp0015 .contact{padding-left:18px;padding-right:18px}
.zp0015 .serviceGrid,.zp0015 .proof{grid-template-columns:1fr}
.zp0015 h1{font-size:clamp(42px,14vw,70px)}}

.zp0015 .heroActions a,.zp0015 .primary,.zp0015 .ctaBtn,.zp0015 .btnPrimary,.zp0015 .schedule>a,.zp0015 .newsletter>a{transition:all .2s ease}
.zp0015 .heroActions a:hover,.zp0015 .primary:hover,.zp0015 .ctaBtn:hover,.zp0015 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0015 nav a,.zp0015 .nav a,.zp0015 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0015 nav a:hover,.zp0015 .nav a:hover,.zp0015 .footer a:hover{
  color:var(--primary)
}
.zp0015 .serviceGrid article,.zp0015 .projectCard,.zp0015 .teamCard,.zp0015 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0015 .serviceGrid article:hover,.zp0015 .projectCard:hover,.zp0015 .teamCard:hover,.zp0015 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0015 *,.zp0015 *::before,.zp0015 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0015 a,.zp0015 button,.zp0015 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail vertical"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero locationHero"><div className="mapPanel"><span>{address || "Local / Independent"}</span><div className="mapDot"/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Book an appointment</a><a href="#services">Explore</a></div></div></section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Book an appointment</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Magazine / product-journey</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
