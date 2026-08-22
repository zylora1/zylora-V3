import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0748-portfolio-surrealism", "family": "Surrealism", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "minimal-wordmark|navigation-led|research-led|timeline>faq>services>proof>destinations|notched|sports-editorial", "industry": "portfolio", "hero": "navigation-led", "navigation": "minimal-wordmark", "layout": "research-led"};

export default function Template0748({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Stillwater Creative Portfolio");
  const headline = String(content.headline || "A concise portfolio that makes the work, thinking, and role in each project easy to understand.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Selected work", "Case studies", "About", "Recognition", "Contact"];
  const industryLabel = "Creative portfolio";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Miller & Rowe Lead", "role": "Principal / Lead"}, {"name": "Stone & Pine Team", "role": "Client experience"}, {"name": "Foxglove Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Creative portfolio / Project A", "Creative portfolio / Project B", "Creative portfolio / Project C", "Creative portfolio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A concise portfolio that makes the work, thinking, and role in each project easy to understand. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#55d8ff";
  return <main className="zp0748" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0748{--bg:#07111f;--fg:#e8f0ff;--primary:#55d8ff;--primary-fg:#050505;--secondary:#8477ff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:36px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0748 *{box-sizing:border-box}
.zp0748 a{color:inherit;text-decoration:none}
.zp0748 h1,.zp0748 h2,.zp0748 h3,.zp0748 blockquote{font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;text-wrap:balance}
.zp0748 img{max-width:100%;display:block}
.zp0748 button,.zp0748 a{-webkit-tap-highlight-color:transparent}
.zp0748 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0748 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0748 .nav strong{font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;font-size:18px}
.zp0748 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0748 .mobileMenu{display:none}
.zp0748 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0748 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0748 .eyebrow,.zp0748 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0748 h1{font-size:clamp(48px,6.9vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0748 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0748 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0748 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0748 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0748 .navLedHero{grid-template-columns:.35fr 1.65fr}
.zp0748 .navLedIndex{display:grid;gap:18px;align-self:start}
.zp0748 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0748 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0748 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0748 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0748 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0748 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0748 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0748 .serviceGrid p{color:var(--muted)}
.zp0748 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0748 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0748 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0748 .faqList{max-width:900px;margin-left:auto}
.zp0748 details{border-top:1px solid var(--border);padding:20px 0}
.zp0748 details summary{font-weight:800;cursor:pointer}
.zp0748 details p{color:var(--muted);max-width:70ch}
.zp0748 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0748 .timeline article{padding:20px 0}
.zp0748 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0748 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0748 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0748 .contact .eyebrow{color:var(--bg)}
.zp0748 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0748 .contactMeta{display:grid;gap:10px}
.zp0748 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@media(max-width:1024px){.zp0748 .hero{min-height:auto}
.zp0748 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0748 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0748 .nav nav{display:none}
.zp0748 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0748 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0748 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0748 .mobileMenu nav a{padding:10px 8px}
.zp0748 .hero,.zp0748 .navLedHero{grid-template-columns:1fr}
.zp0748 .section,.zp0748 .sectionTitle,.zp0748 .contact{grid-template-columns:1fr}
.zp0748 .section{display:block}}
@media(max-width:430px){.zp0748{font-size:16px}
.zp0748 .hero,.zp0748 .section,.zp0748 .contact{padding-left:18px;padding-right:18px}
.zp0748 .serviceGrid,.zp0748 .proof,.zp0748 .destinations>div:last-child{grid-template-columns:1fr}
.zp0748 h1{font-size:clamp(42px,14vw,70px)}}

.zp0748 .heroActions a,.zp0748 .primary,.zp0748 .ctaBtn,.zp0748 .btnPrimary,.zp0748 .schedule>a,.zp0748 .newsletter>a{transition:all .2s ease}
.zp0748 .heroActions a:hover,.zp0748 .primary:hover,.zp0748 .ctaBtn:hover,.zp0748 .btnPrimary:hover{
  transform:skewX(-3deg) scale(1.03)
}
.zp0748 nav a,.zp0748 .nav a,.zp0748 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0748 nav a:hover,.zp0748 .nav a:hover,.zp0748 .footer a:hover{
  color:var(--primary);text-decoration:underline
}
.zp0748 .serviceGrid article,.zp0748 .projectCard,.zp0748 .teamCard,.zp0748 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0748 .serviceGrid article:hover,.zp0748 .projectCard:hover,.zp0748 .teamCard:hover,.zp0748 .bentoCard:hover{
  transform:rotate(-2deg) scale(1.02)
}
@keyframes zpEnter{from{opacity:0;transform:skewX(6deg) scale(.96)}to{opacity:1;transform:none}}
.zp0748 .heroCopy{animation:zpEnter .7s cubic-bezier(.2,.8,.2,1) both}
.zp0748 .sectionTitle,.zp0748 .section>h2{animation:zpEnter .6s cubic-bezier(.2,.8,.2,1) .1s both}
@media(prefers-reduced-motion:reduce){.zp0748 *,.zp0748 *::before,.zp0748 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0748 a,.zp0748 button,.zp0748 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav minimal"><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero navLedHero"><div className="navLedIndex"><a href="#services">Services</a><a href="#proof">Approach</a><a href="#contact">Contact</a></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Plan your visit</a><a href="#services">Explore</a></div></div></section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Plan your visit</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Surrealism / research-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
