import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0008-dental-pixel-art", "family": "Pixel Art", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "corner-dock|monumental-type|dashboard-story|destinations>services>faq>proof>newsletter>materials|micro-radius|newspaper", "industry": "dental", "hero": "monumental-type", "navigation": "corner-dock", "layout": "dashboard-story"};

export default function Template0008({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Common Dental Practice");
  const headline = String(content.headline || "Calm dentistry with clear explanations and time for questions.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Preventive exams", "Restorative dentistry", "Invisalign consultations", "Emergency appointments", "Cosmetic dentistry"];
  const serviceNotes = ["Gentle, thorough care explained step by step so you always know what to expect.", "Modern techniques with minimal discomfort — your comfort guides every decision.", "Clear treatment plans with transparent costs before any work begins.", "Emergency slots kept available every day for urgent dental needs.", "Cosmetic results that enhance your smile without erasing what makes it yours."];
  const proofPoints = ["GDC registered practitioners", "Digital X-rays, same session", "Transparent fee schedule", "Same-day emergency care"];
  const testimonial = "I had avoided dentists for years. The team here explained everything before touching anything — completely changed my experience.";
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Juniper Lead", "role": "Principal / Lead"}, {"name": "Miller & Rowe Team", "role": "Client experience"}, {"name": "Stone & Pine Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Dental practice / Project A", "Dental practice / Project B", "Dental practice / Project C", "Dental practice / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Calm dentistry with clear explanations and time for questions. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ffffff";
  return <main className="zp0008" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0008{--bg:#060606;--fg:#f7f7f2;--primary:#ffffff;--primary-fg:#050505;--secondary:#8d8d8d;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:36px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0008 *{box-sizing:border-box}
.zp0008 a{color:inherit;text-decoration:none}
.zp0008 h1,.zp0008 h2,.zp0008 h3,.zp0008 blockquote{font-family:Times New Roman, serif;text-wrap:balance}
.zp0008 img{max-width:100%;display:block}
.zp0008 button,.zp0008 a{-webkit-tap-highlight-color:transparent}
.zp0008 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0008 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0008 .nav strong{font-family:Times New Roman, serif;font-size:18px}
.zp0008 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0008 .mobileMenu{display:none}
.zp0008 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0008 .eyebrow,.zp0008 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0008 h1{font-size:clamp(48px,6.9vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0008 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0008 .monumentalHero{display:block}
.zp0008 .monumentalHero h1{font-size:clamp(74px,16vw,250px);max-width:none;word-break:break-word}
.zp0008 .monumentalBody{display:grid;grid-template-columns:1fr auto;gap:30px;border-top:1px solid var(--border);padding-top:22px}
.zp0008 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0008 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0008 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0008 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0008 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0008 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0008 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0008 .serviceGrid p{color:var(--muted)}
.zp0008 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0008 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0008 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0008 .faqList{max-width:900px;margin-left:auto}
.zp0008 details{border-top:1px solid var(--border);padding:20px 0}
.zp0008 details summary{font-weight:800;cursor:pointer}
.zp0008 details p{color:var(--muted);max-width:70ch}
.zp0008 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0008 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0008 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0008 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0008 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0008 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0008 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0008 .contact .eyebrow{color:var(--bg)}
.zp0008 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0008 .contactMeta{display:grid;gap:10px}
.zp0008 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0008{image-rendering:pixelated}
.zp0008 *{border-radius:0!important}
@keyframes enter-7{from{opacity:0;transform:translateY(25px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0008 .hero{min-height:auto}
.zp0008 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0008 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0008 .nav nav{display:none}
.zp0008 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0008 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0008 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0008 .mobileMenu nav a{padding:10px 8px}
.zp0008 .hero{grid-template-columns:1fr}
.zp0008 .section,.zp0008 .sectionTitle,.zp0008 .contact{grid-template-columns:1fr}
.zp0008 .section{display:block}}
@media(max-width:430px){.zp0008{font-size:16px}
.zp0008 .hero,.zp0008 .section,.zp0008 .contact{padding-left:18px;padding-right:18px}
.zp0008 .serviceGrid,.zp0008 .proof,.zp0008 .destinations>div:last-child{grid-template-columns:1fr}
.zp0008 h1{font-size:clamp(42px,14vw,70px)}
.zp0008 .monumentalHero h1{font-size:clamp(58px,19vw,100px)}
.zp0008 .monumentalBody{grid-template-columns:1fr}}

.zp0008 .heroActions a,.zp0008 .primary,.zp0008 .ctaBtn,.zp0008 .btnPrimary,.zp0008 .schedule>a,.zp0008 .newsletter>a{transition:all .2s ease}
.zp0008 .heroActions a:hover,.zp0008 .primary:hover,.zp0008 .ctaBtn:hover,.zp0008 .btnPrimary:hover{
  image-rendering:pixelated;box-shadow:4px 4px 0 var(--primary)
}
.zp0008 nav a,.zp0008 .nav a,.zp0008 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0008 nav a:hover,.zp0008 .nav a:hover,.zp0008 .footer a:hover{
  color:var(--primary)
}
.zp0008 .serviceGrid article,.zp0008 .projectCard,.zp0008 .teamCard,.zp0008 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0008 .serviceGrid article:hover,.zp0008 .projectCard:hover,.zp0008 .teamCard:hover,.zp0008 .bentoCard:hover{
  box-shadow:4px 4px 0 var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0008 *,.zp0008 *::before,.zp0008 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0008 a,.zp0008 button,.zp0008 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav dock"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero monumentalHero"><h1>{businessName}</h1><div className="monumentalBody"><p>{headline}</p><a href="#contact">Schedule a consultation</a></div></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Schedule a consultation</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Pixel Art / dashboard-story</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
