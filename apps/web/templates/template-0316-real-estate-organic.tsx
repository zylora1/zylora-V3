import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0316-real-estate-organic", "family": "Organic", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "minimal-wordmark|map-led|research-led|services>integrations>faq>press>proof|notched|sports-editorial", "industry": "real-estate", "hero": "map-led", "navigation": "minimal-wordmark", "layout": "research-led"};

export default function Template0316({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Elm Real Estate Agency");
  const headline = String(content.headline || "Local market knowledge, sharp presentation, and straightforward advice through every move.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Residential sales", "Buyer representation", "Rentals", "Market appraisals", "Relocation"];
  const industryLabel = "Real estate agency";
  const serviceNotes = ["Market appraisal within 48 hours — accurate figures, not inflated ones to win instructions.", "Professional photography, floor plans, and videography included in our standard package.", "Accompanied viewings managed by someone who knows the property, not a junior.", "Negotiation management with weekly updates on where every offer stands.", "Completion support including solicitor liaison, survey coordination, and move-in day contact."];
  const proofPoints = ["NAEA Propertymark member", "0% sale fall-through rate", "Average sale: 98.2% of asking", "Fully managed lettings"];
  const testimonial = "They sold our house in 11 days at full asking price. The communication was clear throughout — no chasing required.";
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Clove Lead", "role": "Principal / Lead"}, {"name": "Harbor Team", "role": "Client experience"}, {"name": "Lumen Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Real estate agency / Project A", "Real estate agency / Project B", "Real estate agency / Project C", "Real estate agency / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Local market knowledge, sharp presentation, and straightforward advice through every move. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#3d8b5d";
  return <main className="zp0316" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0316{--bg:#f6fff7;--fg:#17241b;--primary:#3d8b5d;--primary-fg:#050505;--secondary:#d8a657;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:36px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0316 *{box-sizing:border-box}
.zp0316 a{color:inherit;text-decoration:none}
.zp0316 h1,.zp0316 h2,.zp0316 h3,.zp0316 blockquote{font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;text-wrap:balance}
.zp0316 img{max-width:100%;display:block}
.zp0316 button,.zp0316 a{-webkit-tap-highlight-color:transparent}
.zp0316 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0316 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0316 .nav strong{font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;font-size:18px}
.zp0316 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0316 .mobileMenu{display:none}
.zp0316 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0316 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0316 .eyebrow,.zp0316 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0316 h1{font-size:clamp(48px,5.8vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0316 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0316 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0316 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0316 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0316 .mapHero{grid-template-columns:1fr 1fr}
.zp0316 .mapLines{min-height:440px;position:relative;background:linear-gradient(22deg,transparent 48%,var(--primary) 49% 50%,transparent 51%),linear-gradient(-18deg,transparent 58%,var(--secondary) 59% 60%,transparent 61%)}
.zp0316 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0316 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0316 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0316 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0316 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0316 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0316 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0316 .serviceGrid p{color:var(--muted)}
.zp0316 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0316 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0316 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0316 .faqList{max-width:900px;margin-left:auto}
.zp0316 details{border-top:1px solid var(--border);padding:20px 0}
.zp0316 details summary{font-weight:800;cursor:pointer}
.zp0316 details p{color:var(--muted);max-width:70ch}
.zp0316 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0316 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0316 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0316 .awards>div{max-width:800px;margin-left:auto}
.zp0316 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0316 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0316 .contact .eyebrow{color:var(--bg)}
.zp0316 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0316 .contactMeta{display:grid;gap:10px}
.zp0316 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0316 .heroCopy{animation:enter-315 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-315{from{opacity:0;transform:translateY(33px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0316 .hero{min-height:auto}
.zp0316 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0316 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0316 .nav nav{display:none}
.zp0316 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0316 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0316 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0316 .mobileMenu nav a{padding:10px 8px}
.zp0316 .hero,.zp0316 .mapHero{grid-template-columns:1fr}
.zp0316 .section,.zp0316 .sectionTitle,.zp0316 .contact{grid-template-columns:1fr}
.zp0316 .section{display:block}}
@media(max-width:430px){.zp0316{font-size:16px}
.zp0316 .hero,.zp0316 .section,.zp0316 .contact{padding-left:18px;padding-right:18px}
.zp0316 .serviceGrid,.zp0316 .proof{grid-template-columns:1fr}
.zp0316 h1{font-size:clamp(42px,14vw,70px)}}

.zp0316 .heroActions a,.zp0316 .primary,.zp0316 .ctaBtn,.zp0316 .btnPrimary,.zp0316 .schedule>a,.zp0316 .newsletter>a{transition:all .2s ease}
.zp0316 .heroActions a:hover,.zp0316 .primary:hover,.zp0316 .ctaBtn:hover,.zp0316 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);border-radius:30px
}
.zp0316 nav a,.zp0316 .nav a,.zp0316 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0316 nav a:hover,.zp0316 .nav a:hover,.zp0316 .footer a:hover{
  color:var(--primary)
}
.zp0316 .serviceGrid article,.zp0316 .projectCard,.zp0316 .teamCard,.zp0316 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0316 .serviceGrid article:hover,.zp0316 .projectCard:hover,.zp0316 .teamCard:hover,.zp0316 .bentoCard:hover{
  transform:translateY(-4px)
}
@media(prefers-reduced-motion:reduce){.zp0316 *,.zp0316 *::before,.zp0316 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0316 a,.zp0316 button,.zp0316 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav minimal"><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero mapHero"><div className="mapLines"><i/><i/><i/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Schedule a consultation</a><a href="#services">Explore</a></div></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Schedule a consultation</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Organic / research-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
