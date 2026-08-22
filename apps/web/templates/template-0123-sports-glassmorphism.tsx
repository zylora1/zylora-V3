import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0123-sports-glassmorphism", "family": "Glassmorphism", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "statement-bar|horizontal-strip|product-journey|timeline>proof>metrics>services>collection>process>faq|capsule|poster", "industry": "sports", "hero": "horizontal-strip", "navigation": "statement-bar", "layout": "product-journey"};

export default function Template0123({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Atlas Sports Academy");
  const headline = String(content.headline || "Structured coaching that turns practice time into visible performance gains.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Youth development", "Private coaching", "Team programmes", "Performance camps", "Video analysis"];
  const industryLabel = "Sports academy";
  const serviceNotes = ["Youth development pathways from age 6 through junior competition level.", "Elite performance analysis using video and GPS tracking data.", "Strength and conditioning programmes designed for your specific sport.", "Group training camps during school holidays and pre-season blocks.", "Mental performance coaching integrated into the performance plan."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["FA/LTA/BA accredited", "DBS checked coaches", "Performance data tracking", "Sibling discounts available"];
  const testimonial = "My son went from struggling to starting on the first team in one season. The coaching is serious without being intimidating.";
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Tandem Lead", "role": "Principal / Lead"}, {"name": "Morrow Team", "role": "Client experience"}, {"name": "Cedar Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Sports academy / Project A", "Sports academy / Project B", "Sports academy / Project C", "Sports academy / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Structured coaching that turns practice time into visible performance gains. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#29c7b8";
  return <main className="zp0123" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0123{--bg:#081415;--fg:#eefafa;--primary:#29c7b8;--primary-fg:#050505;--secondary:#e5b55f;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:32px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:32px;background:var(--bg);color:var(--fg);font-family:Helvetica Neue, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0123 *{box-sizing:border-box}
.zp0123 a{color:inherit;text-decoration:none}
.zp0123 h1,.zp0123 h2,.zp0123 h3,.zp0123 blockquote{font-family:Impact, Arial Black, sans-serif;text-wrap:balance}
.zp0123 img{max-width:100%;display:block}
.zp0123 button,.zp0123 a{-webkit-tap-highlight-color:transparent}
.zp0123 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0123 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0123 .nav strong{font-family:Impact, Arial Black, sans-serif;font-size:18px}
.zp0123 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0123 .nav.statement{display:grid;grid-template-columns:1fr auto 1fr}
.zp0123 .nav.statement>a{justify-self:end}
.zp0123 .mobileMenu{display:none}
.zp0123 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0123 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0123 .eyebrow,.zp0123 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0123 h1{font-size:clamp(48px,6.9vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0123 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0123 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0123 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0123 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0123 .visual,.zp0123 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0123 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0123 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:32px;right:-8%;top:-18%;transform:rotate(4deg)}
.zp0123 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0123 .heroPhoto{object-fit:cover}
.zp0123 .stripHero{grid-template-columns:1.2fr .8fr;overflow:hidden}
.zp0123 .stripWord{position:absolute;left:0;top:12px;white-space:nowrap;font:900 clamp(40px,8vw,120px)/1 Impact, Arial Black, sans-serif;opacity:.08}
.zp0123 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0123 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0123 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0123 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0123 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0123 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0123 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0123 .serviceGrid p{color:var(--muted)}
.zp0123 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0123 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0123 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0123 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0123 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0123 .faqList{max-width:900px;margin-left:auto}
.zp0123 details{border-top:1px solid var(--border);padding:20px 0}
.zp0123 details summary{font-weight:800;cursor:pointer}
.zp0123 details p{color:var(--muted);max-width:70ch}
.zp0123 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0123 .metrics div{background:var(--bg);padding:30px}
.zp0123 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Impact, Arial Black, sans-serif;color:var(--primary)}
.zp0123 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0123 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0123 .p1,.zp0123 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0123 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0123 .timeline article{padding:20px 0}
.zp0123 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0123 .contact .eyebrow{color:var(--bg)}
.zp0123 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0123 .contactMeta{display:grid;gap:10px}
.zp0123 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0123{background-image:radial-gradient(circle at 15% 10%,color-mix(in srgb,var(--primary) 18%,transparent),transparent 36%),radial-gradient(circle at 90% 25%,color-mix(in srgb,var(--secondary) 15%,transparent),transparent 34%)}
.zp0123 .serviceGrid article{backdrop-filter:blur(14px);background:color-mix(in srgb,var(--surface) 70%,transparent)}
.zp0123 .heroCopy{animation:enter-122 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-122{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0123 .hero{min-height:auto}
.zp0123 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0123 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0123 .nav nav{display:none}
.zp0123 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0123 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0123 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0123 .mobileMenu nav a{padding:10px 8px}
.zp0123 .hero,.zp0123 .stripHero{grid-template-columns:1fr}
.zp0123 .section,.zp0123 .sectionTitle,.zp0123 .contact{grid-template-columns:1fr}
.zp0123 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0123 .metrics{grid-template-columns:1fr 1fr}
.zp0123 .section{display:block}}
@media(max-width:430px){.zp0123{font-size:16px}
.zp0123 .hero,.zp0123 .section,.zp0123 .contact{padding-left:18px;padding-right:18px}
.zp0123 .serviceGrid,.zp0123 .proof,.zp0123 .collectionGrid,.zp0123 .metrics{grid-template-columns:1fr}
.zp0123 h1{font-size:clamp(42px,14vw,70px)}
.zp0123 .nav.statement{grid-template-columns:1fr auto}
.zp0123 .nav.statement>span:first-child{display:none}}

.zp0123 .heroActions a,.zp0123 .primary,.zp0123 .ctaBtn,.zp0123 .btnPrimary,.zp0123 .schedule>a,.zp0123 .newsletter>a{transition:all .2s ease}
.zp0123 .heroActions a:hover,.zp0123 .primary:hover,.zp0123 .ctaBtn:hover,.zp0123 .btnPrimary:hover{
  background:color-mix(in srgb,var(--primary) 30%,transparent);border-color:var(--primary)
}
.zp0123 nav a,.zp0123 .nav a,.zp0123 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0123 nav a:hover,.zp0123 .nav a:hover,.zp0123 .footer a:hover{
  color:var(--primary)
}
.zp0123 .serviceGrid article,.zp0123 .projectCard,.zp0123 .teamCard,.zp0123 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0123 .serviceGrid article:hover,.zp0123 .projectCard:hover,.zp0123 .teamCard:hover,.zp0123 .bentoCard:hover{
  background:color-mix(in srgb,var(--fg) 18%,transparent)
}
@media(prefers-reduced-motion:reduce){.zp0123 *,.zp0123 *::before,.zp0123 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0123 a,.zp0123 button,.zp0123 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav statement"><span>Independent / Local / Established</span><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero stripHero"><div className="stripWord">{businessName} — {businessName}</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Send an enquiry</a><a href="#services">Explore</a></div></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">22</span><div className="visualMark"/><small>{businessName}</small></div>}</section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Send an enquiry</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Glassmorphism / product-journey</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
