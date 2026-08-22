import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0741-portfolio-paper-texture", "family": "Paper Texture", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "lower-third|testimonial-led|architectural-grid|team>materials>newsletter>services>proof>research>faq|ticket-edge|humanist-classic", "industry": "portfolio", "hero": "testimonial-led", "navigation": "lower-third", "layout": "architectural-grid"};

export default function Template0741({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Aster Creative Portfolio");
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
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Common Lead", "role": "Principal / Lead"}, {"name": "Stillwater Team", "role": "Client experience"}, {"name": "Kite Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Creative portfolio / Project A", "Creative portfolio / Project B", "Creative portfolio / Project C", "Creative portfolio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A concise portfolio that makes the work, thinking, and role in each project easy to understand. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ffcc33";
  return <main className="zp0741" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0741{--bg:#101218;--fg:#f7f5f0;--primary:#ffcc33;--primary-fg:#050505;--secondary:#3f7cff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:8px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:24px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0741 *{box-sizing:border-box}
.zp0741 a{color:inherit;text-decoration:none}
.zp0741 h1,.zp0741 h2,.zp0741 h3,.zp0741 blockquote{font-family:Baskerville, Georgia, serif;text-wrap:balance}
.zp0741 img{max-width:100%;display:block}
.zp0741 button,.zp0741 a{-webkit-tap-highlight-color:transparent}
.zp0741 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0741 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0741 .nav strong{font-family:Baskerville, Georgia, serif;font-size:18px}
.zp0741 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0741 .nav.lower{position:absolute;top:auto;bottom:0;width:100%;border-top:var(--line) solid var(--border)}
.zp0741 .mobileMenu{display:none}
.zp0741 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0741 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0741 .eyebrow,.zp0741 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0741 h1{font-size:clamp(48px,5.8vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0741 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0741 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0741 .heroActions a,.zp0741 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0741 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0741 .quoteHero{grid-template-columns:1fr 1fr}
.zp0741 .quoteHero blockquote{font-size:clamp(36px,5vw,76px);line-height:.98;margin:0}
.zp0741 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0741 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0741 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0741 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0741 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0741 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0741 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0741 .serviceGrid p{color:var(--muted)}
.zp0741 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0741 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0741 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0741 .faqList{max-width:900px;margin-left:auto}
.zp0741 details{border-top:1px solid var(--border);padding:20px 0}
.zp0741 details summary{font-weight:800;cursor:pointer}
.zp0741 details p{color:var(--muted);max-width:70ch}
.zp0741 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0741 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0741 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Baskerville, Georgia, serif;margin-bottom:18px}
.zp0741 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0741 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0741 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0741 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0741 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0741 .researchRows{max-width:900px;margin-left:auto}
.zp0741 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0741 .contact .eyebrow{color:var(--bg)}
.zp0741 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0741 .contactMeta{display:grid;gap:10px}
.zp0741 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0741{background-image:repeating-linear-gradient(0deg,transparent 0 28px,color-mix(in srgb,var(--fg) 4%,transparent) 29px 30px)}
.zp0741 .section:nth-of-type(3n){transform:rotate(0.35deg)}
.zp0741 .heroCopy{animation:enter-740 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-740{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0741 .hero{min-height:auto}
.zp0741 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0741 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0741 .nav nav{display:none}
.zp0741 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0741 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0741 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0741 .mobileMenu nav a{padding:10px 8px}
.zp0741 .hero,.zp0741 .quoteHero{grid-template-columns:1fr}
.zp0741 .section,.zp0741 .sectionTitle,.zp0741 .contact{grid-template-columns:1fr}
.zp0741 .teamGrid{grid-template-columns:1fr 1fr}
.zp0741 .section{display:block}}
@media(max-width:430px){.zp0741{font-size:16px}
.zp0741 .hero,.zp0741 .section,.zp0741 .contact{padding-left:18px;padding-right:18px}
.zp0741 .serviceGrid,.zp0741 .proof,.zp0741 .teamGrid{grid-template-columns:1fr}
.zp0741 h1{font-size:clamp(42px,14vw,70px)}}

.zp0741 .heroActions a,.zp0741 .primary,.zp0741 .ctaBtn,.zp0741 .btnPrimary,.zp0741 .schedule>a,.zp0741 .newsletter>a{transition:all .2s ease}
.zp0741 .heroActions a:hover,.zp0741 .primary:hover,.zp0741 .ctaBtn:hover,.zp0741 .btnPrimary:hover{
  opacity:.8
}
.zp0741 nav a,.zp0741 .nav a,.zp0741 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0741 nav a:hover,.zp0741 .nav a:hover,.zp0741 .footer a:hover{
  color:var(--primary)
}
.zp0741 .serviceGrid article,.zp0741 .projectCard,.zp0741 .teamCard,.zp0741 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0741 .serviceGrid article:hover,.zp0741 .projectCard:hover,.zp0741 .teamCard:hover,.zp0741 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0741 *,.zp0741 *::before,.zp0741 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0741 a,.zp0741 button,.zp0741 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav lower"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero quoteHero"><blockquote>“Clear, thoughtful, and easy to work with.”</blockquote><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Apply now</a><a href="#services">Explore</a></div></div></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Apply now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Paper Texture / architectural-grid</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
