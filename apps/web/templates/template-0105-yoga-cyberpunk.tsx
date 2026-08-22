import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0105-yoga-cyberpunk", "family": "Cyberpunk", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "fullscreen-menu|poster|split-scroll|services>proof>availability>faq>awards>research>programmes|hairline|slab", "industry": "yoga", "hero": "poster", "navigation": "fullscreen-menu", "layout": "split-scroll"};

export default function Template0105({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Vale Yoga Studio");
  const headline = String(content.headline || "A grounded practice space for strength, mobility, breath, and community.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Vinyasa classes", "Beginner foundations", "Prenatal yoga", "Private sessions", "Weekend workshops"];
  const industryLabel = "Yoga studio";
  const serviceNotes = ["Beginners to advanced — class levels clearly marked so you start in the right place.", "Dynamic vinyasa, restorative yin, and breathwork offerings across the week.", "Prenatal and postnatal classes run by specialist teachers.", "Workshops on anatomy and alignment for practitioners wanting to go deeper.", "Monthly immersive day retreats for those needing a full reset."];
  const proofPoints = ["200h+ certified teachers", "Heated and non-heated studios", "Unlimited class packages", "Online library access"];
  const testimonial = "The teachers remember you by name and adapt the class based on who's in the room. It feels personal at every level.";
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Stillwater Lead", "role": "Principal / Lead"}, {"name": "Kite Team", "role": "Client experience"}, {"name": "Pavilion Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Yoga studio / Project A", "Yoga studio / Project B", "Yoga studio / Project C", "Yoga studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "A grounded practice space for strength, mobility, breath, and community. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#53e1d9";
  return <main className="zp0105" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0105{--bg:#0e0e16;--fg:#f5f6ff;--primary:#53e1d9;--primary-fg:#050505;--secondary:#ff5a8a;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:24px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0105 *{box-sizing:border-box}
.zp0105 a{color:inherit;text-decoration:none}
.zp0105 h1,.zp0105 h2,.zp0105 h3,.zp0105 blockquote{font-family:Rockwell, Courier New, serif;text-wrap:balance}
.zp0105 img{max-width:100%;display:block}
.zp0105 button,.zp0105 a{-webkit-tap-highlight-color:transparent}
.zp0105 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0105 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0105 .nav strong{font-family:Rockwell, Courier New, serif;font-size:18px}
.zp0105 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0105 .nav.menu details{position:relative}
.zp0105 .nav.menu details nav{position:absolute;right:0;top:36px;display:grid;background:var(--bg);border:1px solid var(--border);padding:18px;min-width:180px}
.zp0105 .mobileMenu{display:none}
.zp0105 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0105 .eyebrow,.zp0105 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0105 h1{font-size:clamp(48px,8.0vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0105 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0105 .posterHero{display:flex;flex-direction:column;justify-content:space-between;align-items:stretch;background:var(--primary);color:var(--primary-fg)}
.zp0105 .posterHero h1{font-size:clamp(70px,12vw,190px);max-width:none;text-transform:uppercase}
.zp0105 .posterTop,.zp0105 .posterBottom{display:flex;justify-content:space-between;gap:30px}
.zp0105 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0105 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0105 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0105 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0105 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0105 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0105 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0105 .serviceGrid p{color:var(--muted)}
.zp0105 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0105 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0105 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0105 .faqList{max-width:900px;margin-left:auto}
.zp0105 details{border-top:1px solid var(--border);padding:20px 0}
.zp0105 details summary{font-weight:800;cursor:pointer}
.zp0105 details p{color:var(--muted);max-width:70ch}
.zp0105 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0105 .awards>div{max-width:800px;margin-left:auto}
.zp0105 .awards p,.zp0105 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0105 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0105 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0105 .researchRows{max-width:900px;margin-left:auto}
.zp0105 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0105 .contact .eyebrow{color:var(--bg)}
.zp0105 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0105 .contactMeta{display:grid;gap:10px}
.zp0105 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-104{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0105 .hero{min-height:auto}
.zp0105 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0105 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0105 .nav nav{display:none}
.zp0105 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0105 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0105 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0105 .mobileMenu nav a{padding:10px 8px}
.zp0105 .hero{grid-template-columns:1fr}
.zp0105 .section,.zp0105 .sectionTitle,.zp0105 .contact{grid-template-columns:1fr}
.zp0105 .section{display:block}}
@media(max-width:430px){.zp0105{font-size:16px}
.zp0105 .hero,.zp0105 .section,.zp0105 .contact{padding-left:18px;padding-right:18px}
.zp0105 .serviceGrid,.zp0105 .proof,.zp0105 .programmes>div:last-child{grid-template-columns:1fr}
.zp0105 h1{font-size:clamp(42px,14vw,70px)}
.zp0105 .posterHero h1{font-size:clamp(58px,19vw,100px)}}

.zp0105 .heroActions a,.zp0105 .primary,.zp0105 .ctaBtn,.zp0105 .btnPrimary,.zp0105 .schedule>a,.zp0105 .newsletter>a{transition:all .2s ease}
.zp0105 .heroActions a:hover,.zp0105 .primary:hover,.zp0105 .ctaBtn:hover,.zp0105 .btnPrimary:hover{
  box-shadow:0 0 24px var(--primary);border-color:var(--primary)
}
.zp0105 nav a,.zp0105 .nav a,.zp0105 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0105 nav a:hover,.zp0105 .nav a:hover,.zp0105 .footer a:hover{
  color:var(--primary);text-shadow:0 0 8px var(--primary)
}
.zp0105 .serviceGrid article,.zp0105 .projectCard,.zp0105 .teamCard,.zp0105 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0105 .serviceGrid article:hover,.zp0105 .projectCard:hover,.zp0105 .teamCard:hover,.zp0105 .bentoCard:hover{
  box-shadow:0 0 16px color-mix(in srgb,var(--primary) 35%,transparent)
}
@media(prefers-reduced-motion:reduce){.zp0105 *,.zp0105 *::before,.zp0105 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0105 a,.zp0105 button,.zp0105 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav menu"><strong>{businessName}</strong><details><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero posterHero"><div className="posterTop"><span>{industryLabel}</span><span>{businessName}</span></div><h1>{headline}</h1><div className="posterBottom"><p>{description}</p><a href="#contact">Join the community</a></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Join the community</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Cyberpunk / split-scroll</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
