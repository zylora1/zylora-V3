import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0694-video-ultra-minimalism", "family": "Ultra Minimalism", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "mega-utility|timeline-hero|service-catalogue|timeline>services>faq>proof>credentials|pill-controls|warm-editorial", "industry": "video", "hero": "timeline-hero", "navigation": "mega-utility", "layout": "service-catalogue"};

export default function Template0694({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Mosaic Film Studio");
  const headline = String(content.headline || "Cinematic storytelling with disciplined production from first treatment to final grade.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Commercial films", "Brand stories", "Documentary", "Post-production", "Photography"];
  const industryLabel = "Film studio";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Foundry Lead", "role": "Principal / Lead"}, {"name": "Rook Team", "role": "Client experience"}, {"name": "Northline Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Film studio / Project A", "Film studio / Project B", "Film studio / Project C", "Film studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Cinematic storytelling with disciplined production from first treatment to final grade. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d2a679";
  return <main className="zp0694" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0694{--bg:#0d0d0d;--fg:#f3ebe1;--primary:#d2a679;--primary-fg:#050505;--secondary:#aa7b57;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:28px;--line:0px;--shadow:none;--max:1360px;--space:28px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0694 *{box-sizing:border-box}
.zp0694 a{color:inherit;text-decoration:none}
.zp0694 h1,.zp0694 h2,.zp0694 h3,.zp0694 blockquote{font-family:Palatino Linotype, Georgia, serif;text-wrap:balance}
.zp0694 img{max-width:100%;display:block}
.zp0694 button,.zp0694 a{-webkit-tap-highlight-color:transparent}
.zp0694 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0694 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0694 .nav strong{font-family:Palatino Linotype, Georgia, serif;font-size:18px}
.zp0694 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0694 .mobileMenu{display:none}
.zp0694 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0694 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0694 .eyebrow,.zp0694 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0694 h1{font-size:clamp(48px,7.45vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0694 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0694 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0694 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0694 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0694 .timelineHero{grid-template-columns:.4fr 1.6fr}
.zp0694 .timelineLine{display:flex;flex-direction:column;justify-content:space-between;height:60vh;border-left:2px solid var(--primary);padding-left:18px}
.zp0694 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0694 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0694 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0694 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0694 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0694 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0694 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0694 .serviceGrid p{color:var(--muted)}
.zp0694 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0694 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0694 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0694 .faqList{max-width:900px;margin-left:auto}
.zp0694 details{border-top:1px solid var(--border);padding:20px 0}
.zp0694 details summary{font-weight:800;cursor:pointer}
.zp0694 details p{color:var(--muted);max-width:70ch}
.zp0694 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0694 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0694 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0694 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0694 .timeline article{padding:20px 0}
.zp0694 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0694 .contact .eyebrow{color:var(--bg)}
.zp0694 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0694 .contactMeta{display:grid;gap:10px}
.zp0694 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0694 .heroCopy{animation:enter-693 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-693{from{opacity:0;transform:translateY(31px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0694 .hero{min-height:auto}
.zp0694 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0694 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0694 .nav nav{display:none}
.zp0694 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0694 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0694 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0694 .mobileMenu nav a{padding:10px 8px}
.zp0694 .hero,.zp0694 .timelineHero{grid-template-columns:1fr}
.zp0694 .section,.zp0694 .sectionTitle,.zp0694 .contact{grid-template-columns:1fr}
.zp0694 .section{display:block}}
@media(max-width:430px){.zp0694{font-size:16px}
.zp0694 .hero,.zp0694 .section,.zp0694 .contact{padding-left:18px;padding-right:18px}
.zp0694 .serviceGrid,.zp0694 .proof{grid-template-columns:1fr}
.zp0694 h1{font-size:clamp(42px,14vw,70px)}}

.zp0694 .heroActions a,.zp0694 .primary,.zp0694 .ctaBtn,.zp0694 .btnPrimary,.zp0694 .schedule>a,.zp0694 .newsletter>a{transition:all .2s ease}
.zp0694 .heroActions a:hover,.zp0694 .primary:hover,.zp0694 .ctaBtn:hover,.zp0694 .btnPrimary:hover{
  opacity:.75
}
.zp0694 nav a,.zp0694 .nav a,.zp0694 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0694 nav a:hover,.zp0694 .nav a:hover,.zp0694 .footer a:hover{
  opacity:.6
}
.zp0694 .serviceGrid article,.zp0694 .projectCard,.zp0694 .teamCard,.zp0694 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0694 .serviceGrid article:hover,.zp0694 .projectCard:hover,.zp0694 .teamCard:hover,.zp0694 .bentoCard:hover{
  opacity:.9
}
@media(prefers-reduced-motion:reduce){.zp0694 *,.zp0694 *::before,.zp0694 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0694 a,.zp0694 button,.zp0694 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav utility"><strong>{businessName}</strong><span>Open today</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero timelineHero"><div className="timelineLine"><span>Start</span><span>Today</span><span>Next</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Schedule a consultation</a><a href="#services">Explore</a></div></div></section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Schedule a consultation</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Ultra Minimalism / service-catalogue</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
