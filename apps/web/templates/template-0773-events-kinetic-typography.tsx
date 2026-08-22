import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0773-events-kinetic-typography", "family": "Kinetic Typography", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "lower-third|testimonial-led|case-study-led|faq>destinations>manifesto>proof>services>awards|ticket-edge|condensed-editorial", "industry": "events", "hero": "testimonial-led", "navigation": "lower-third", "layout": "case-study-led"};

export default function Template0773({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Aster Event Studio");
  const headline = String(content.headline || "Events designed around guest experience, operational detail, and memorable moments.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Corporate events", "Launches", "Private celebrations", "Production", "Venue sourcing"];
  const industryLabel = "Event studio";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Common Lead", "role": "Principal / Lead"}, {"name": "Stillwater Team", "role": "Client experience"}, {"name": "Kite Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Event studio / Project A", "Event studio / Project B", "Event studio / Project C", "Event studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Events designed around guest experience, operational detail, and memorable moments. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#7a46ff";
  return <main className="zp0773" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0773{--bg:#f6f1ff;--fg:#241837;--primary:#7a46ff;--primary-fg:#ffffff;--secondary:#f179c6;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:8px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:24px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0773 *{box-sizing:border-box}
.zp0773 a{color:inherit;text-decoration:none}
.zp0773 h1,.zp0773 h2,.zp0773 h3,.zp0773 blockquote{font-family:Arial Narrow, Arial, sans-serif;text-wrap:balance}
.zp0773 img{max-width:100%;display:block}
.zp0773 button,.zp0773 a{-webkit-tap-highlight-color:transparent}
.zp0773 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0773 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0773 .nav strong{font-family:Arial Narrow, Arial, sans-serif;font-size:18px}
.zp0773 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0773 .nav.lower{position:absolute;top:auto;bottom:0;width:100%;border-top:var(--line) solid var(--border)}
.zp0773 .mobileMenu{display:none}
.zp0773 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0773 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0773 .eyebrow,.zp0773 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0773 h1{font-size:clamp(48px,6.9vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0773 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0773 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0773 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0773 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0773 .quoteHero{grid-template-columns:1fr 1fr}
.zp0773 .quoteHero blockquote{font-size:clamp(36px,5vw,76px);line-height:.98;margin:0}
.zp0773 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0773 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0773 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0773 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0773 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0773 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0773 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0773 .serviceGrid p{color:var(--muted)}
.zp0773 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0773 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0773 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0773 .faqList{max-width:900px;margin-left:auto}
.zp0773 details{border-top:1px solid var(--border);padding:20px 0}
.zp0773 details summary{font-weight:800;cursor:pointer}
.zp0773 details p{color:var(--muted);max-width:70ch}
.zp0773 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Arial Narrow, Arial, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0773 .awards>div{max-width:800px;margin-left:auto}
.zp0773 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0773 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0773 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0773 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0773 .contact .eyebrow{color:var(--bg)}
.zp0773 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0773 .contactMeta{display:grid;gap:10px}
.zp0773 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0773 .heroCopy{animation:enter-772 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-772{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0773 .hero{min-height:auto}
.zp0773 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0773 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0773 .nav nav{display:none}
.zp0773 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0773 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0773 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0773 .mobileMenu nav a{padding:10px 8px}
.zp0773 .hero,.zp0773 .quoteHero{grid-template-columns:1fr}
.zp0773 .section,.zp0773 .sectionTitle,.zp0773 .contact{grid-template-columns:1fr}
.zp0773 .section{display:block}}
@media(max-width:430px){.zp0773{font-size:16px}
.zp0773 .hero,.zp0773 .section,.zp0773 .contact{padding-left:18px;padding-right:18px}
.zp0773 .serviceGrid,.zp0773 .proof,.zp0773 .destinations>div:last-child{grid-template-columns:1fr}
.zp0773 h1{font-size:clamp(42px,14vw,70px)}}

.zp0773 .heroActions a,.zp0773 .primary,.zp0773 .ctaBtn,.zp0773 .btnPrimary,.zp0773 .schedule>a,.zp0773 .newsletter>a{transition:all .2s ease}
.zp0773 .heroActions a:hover,.zp0773 .primary:hover,.zp0773 .ctaBtn:hover,.zp0773 .btnPrimary:hover{
  transform:scale(1.04);letter-spacing:.06em
}
.zp0773 nav a,.zp0773 .nav a,.zp0773 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0773 nav a:hover,.zp0773 .nav a:hover,.zp0773 .footer a:hover{
  letter-spacing:.08em;color:var(--primary)
}
.zp0773 .serviceGrid article,.zp0773 .projectCard,.zp0773 .teamCard,.zp0773 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0773 .serviceGrid article:hover,.zp0773 .projectCard:hover,.zp0773 .teamCard:hover,.zp0773 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0773 *,.zp0773 *::before,.zp0773 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0773 a,.zp0773 button,.zp0773 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav lower"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero quoteHero"><blockquote>“Clear, thoughtful, and easy to work with.”</blockquote><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Reserve a table</a><a href="#services">Explore</a></div></div></section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Kinetic Typography / case-study-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
