import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0111-yoga-industrial", "family": "Industrial", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "vertical-rail|location-led|story-first|research>press>services>programmes>timeline>faq>proof|soft-12|geometric", "industry": "yoga", "hero": "location-led", "navigation": "vertical-rail", "layout": "story-first"};

export default function Template0111({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Miller & Rowe Yoga Studio");
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
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["200h+ certified teachers", "Heated and non-heated studios", "Unlimited class packages", "Online library access"];
  const testimonial = "The teachers remember you by name and adapt the class based on who's in the room. It feels personal at every level.";
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Signal Lead", "role": "Principal / Lead"}, {"name": "Mosaic Team", "role": "Client experience"}, {"name": "Kindred Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Yoga studio / Project A", "Yoga studio / Project B", "Yoga studio / Project C", "Yoga studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "A grounded practice space for strength, mobility, breath, and community. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#4a6a35";
  return <main className="zp0111" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0111{--bg:#eef0e8;--fg:#20261e;--primary:#4a6a35;--primary-fg:#ffffff;--secondary:#c68152;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:12px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:32px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0111 *{box-sizing:border-box}
.zp0111 a{color:inherit;text-decoration:none}
.zp0111 h1,.zp0111 h2,.zp0111 h3,.zp0111 blockquote{font-family:Century Gothic, Avenir, sans-serif;text-wrap:balance}
.zp0111 img{max-width:100%;display:block}
.zp0111 button,.zp0111 a{-webkit-tap-highlight-color:transparent}
.zp0111 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0111 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0111 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0111 .mobileMenu{display:none}
.zp0111:has(.navRail)>.hero,.zp0111:has(.navRail)>.section,.zp0111:has(.navRail)>.contact,.zp0111:has(.navRail)>.footer{margin-left:190px}
.zp0111 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0111 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0111 .eyebrow,.zp0111 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0111 h1{font-size:clamp(48px,5.8vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0111 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0111 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0111 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0111 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0111 .locationHero{grid-template-columns:1fr 1fr}
.zp0111 .mapPanel{min-height:430px;border:1px solid var(--border);position:relative;padding:24px;background:repeating-linear-gradient(45deg,transparent 0 28px,var(--border) 29px 30px)}
.zp0111 .mapDot{position:absolute;left:55%;top:46%;width:24px;aspect-ratio:1;background:var(--primary);border-radius:50%;box-shadow:0 0 0 18px color-mix(in srgb,var(--primary) 18%,transparent)}
.zp0111 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0111 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0111 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0111 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0111 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0111 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0111 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0111 .serviceGrid p{color:var(--muted)}
.zp0111 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0111 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0111 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0111 .faqList{max-width:900px;margin-left:auto}
.zp0111 details{border-top:1px solid var(--border);padding:20px 0}
.zp0111 details summary{font-weight:800;cursor:pointer}
.zp0111 details p{color:var(--muted);max-width:70ch}
.zp0111 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0111 .timeline article{padding:20px 0}
.zp0111 .awards>div{max-width:800px;margin-left:auto}
.zp0111 .awards p,.zp0111 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0111 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0111 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0111 .researchRows{max-width:900px;margin-left:auto}
.zp0111 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0111 .contact .eyebrow{color:var(--bg)}
.zp0111 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0111 .contactMeta{display:grid;gap:10px}
.zp0111 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0111 .heroCopy{animation:enter-110 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-110{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0111 .hero{min-height:auto}
.zp0111 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0111 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0111 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0111 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0111 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0111 .mobileMenu nav a{padding:10px 8px}
.zp0111 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0111:has(.navRail)>.hero,.zp0111:has(.navRail)>.section,.zp0111:has(.navRail)>.contact,.zp0111:has(.navRail)>.footer{margin-left:0}
.zp0111 .hero,.zp0111 .locationHero{grid-template-columns:1fr}
.zp0111 .section,.zp0111 .sectionTitle,.zp0111 .contact{grid-template-columns:1fr}
.zp0111 .section{display:block}}
@media(max-width:430px){.zp0111{font-size:16px}
.zp0111 .hero,.zp0111 .section,.zp0111 .contact{padding-left:18px;padding-right:18px}
.zp0111 .serviceGrid,.zp0111 .proof,.zp0111 .programmes>div:last-child{grid-template-columns:1fr}
.zp0111 h1{font-size:clamp(42px,14vw,70px)}}

.zp0111 .heroActions a,.zp0111 .primary,.zp0111 .ctaBtn,.zp0111 .btnPrimary,.zp0111 .schedule>a,.zp0111 .newsletter>a{transition:all .2s ease}
.zp0111 .heroActions a:hover,.zp0111 .primary:hover,.zp0111 .ctaBtn:hover,.zp0111 .btnPrimary:hover{
  background:var(--fg);color:var(--bg);border-radius:0
}
.zp0111 nav a,.zp0111 .nav a,.zp0111 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0111 nav a:hover,.zp0111 .nav a:hover,.zp0111 .footer a:hover{
  color:var(--primary)
}
.zp0111 .serviceGrid article,.zp0111 .projectCard,.zp0111 .teamCard,.zp0111 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0111 .serviceGrid article:hover,.zp0111 .projectCard:hover,.zp0111 .teamCard:hover,.zp0111 .bentoCard:hover{
  transform:translateX(3px)
}
@media(prefers-reduced-motion:reduce){.zp0111 *,.zp0111 *::before,.zp0111 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0111 a,.zp0111 button,.zp0111 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail vertical"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero locationHero"><div className="mapPanel"><span>{address || "Local / Independent"}</span><div className="mapDot"/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Apply now</a><a href="#services">Explore</a></div></div></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Apply now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Industrial / story-first</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
