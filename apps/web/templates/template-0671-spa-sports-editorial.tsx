import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0671-spa-sports-editorial", "family": "Sports Editorial", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "vertical-rail|interactive-canvas|manifesto-grid|hours>packages>services>proof>faq>research|soft-12|clean-humanist", "industry": "spa", "hero": "interactive-canvas", "navigation": "vertical-rail", "layout": "manifesto-grid"};

export default function Template0671({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Clove Day Spa");
  const headline = String(content.headline || "A restorative pause with thoughtful treatments, quiet spaces, and easy booking.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Massage", "Facials", "Body treatments", "Rituals", "Memberships"];
  const industryLabel = "Day spa";
  const serviceNotes = ["ESPA and Elemis trained therapists with ongoing annual certification.", "Treatment programme design: 3 or 6-session plans with outcome-focused protocols.", "Couples' spa days with private suite, champagne, and shared treatment sequence.", "Thermal suite access included in all treatment bookings: pool, sauna, and steam.", "Corporate wellness days with catering, treatments, and meeting space combined."];
  const proofPoints = ["Luxury Guild accredited", "Thermal suite and vitality pool", "Corporate packages available", "Gift vouchers online"];
  const testimonial = "The therapist spent 10 minutes asking about what I needed before any treatment. The session was precisely right.";
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Morrow Lead", "role": "Principal / Lead"}, {"name": "Cedar Team", "role": "Client experience"}, {"name": "Arc Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Day spa / Project A", "Day spa / Project B", "Day spa / Project C", "Day spa / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A restorative pause with thoughtful treatments, quiet spaces, and easy booking. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#4a6a35";
  return <main className="zp0671" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0671{--bg:#eef0e8;--fg:#20261e;--primary:#4a6a35;--primary-fg:#ffffff;--secondary:#c68152;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:12px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:32px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0671 *{box-sizing:border-box}
.zp0671 a{color:inherit;text-decoration:none}
.zp0671 h1,.zp0671 h2,.zp0671 h3,.zp0671 blockquote{font-family:Avenir, Helvetica Neue, Arial, sans-serif;text-wrap:balance}
.zp0671 img{max-width:100%;display:block}
.zp0671 button,.zp0671 a{-webkit-tap-highlight-color:transparent}
.zp0671 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0671 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0671 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0671 .mobileMenu{display:none}
.zp0671:has(.navRail)>.hero,.zp0671:has(.navRail)>.section,.zp0671:has(.navRail)>.contact,.zp0671:has(.navRail)>.footer{margin-left:190px}
.zp0671 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0671 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0671 .eyebrow,.zp0671 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0671 h1{font-size:clamp(48px,5.8vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0671 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0671 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0671 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0671 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0671 .canvasHero{overflow:hidden}
.zp0671 .canvasGrid{position:absolute;inset:0;display:grid;grid-template-columns:repeat(4,1fr);opacity:.3}
.zp0671 .canvasGrid i{border-right:1px solid var(--border)}
.zp0671 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0671 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0671 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0671 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0671 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0671 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0671 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0671 .serviceGrid p{color:var(--muted)}
.zp0671 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0671 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0671 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0671 .faqList{max-width:900px;margin-left:auto}
.zp0671 details{border-top:1px solid var(--border);padding:20px 0}
.zp0671 details summary{font-weight:800;cursor:pointer}
.zp0671 details p{color:var(--muted);max-width:70ch}
.zp0671 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0671 .hours dl{margin:0}
.zp0671 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0671 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0671 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0671 .packages>.sectionTitle{grid-column:1/-1}
.zp0671 .packages article{padding:24px;border:1px solid var(--border)}
.zp0671 .researchRows{max-width:900px;margin-left:auto}
.zp0671 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0671 .contact .eyebrow{color:var(--bg)}
.zp0671 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0671 .contactMeta{display:grid;gap:10px}
.zp0671 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0671 .heroCopy{animation:enter-670 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-670{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0671 .hero{min-height:auto}
.zp0671 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0671 .proof{grid-template-columns:1fr 1fr}
.zp0671 .packages{grid-template-columns:1fr 1fr}
.zp0671 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0671 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0671 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0671 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0671 .mobileMenu nav a{padding:10px 8px}
.zp0671 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0671:has(.navRail)>.hero,.zp0671:has(.navRail)>.section,.zp0671:has(.navRail)>.contact,.zp0671:has(.navRail)>.footer{margin-left:0}
.zp0671 .hero{grid-template-columns:1fr}
.zp0671 .section,.zp0671 .sectionTitle,.zp0671 .hours,.zp0671 .contact{grid-template-columns:1fr}
.zp0671 .section{display:block}}
@media(max-width:430px){.zp0671{font-size:16px}
.zp0671 .hero,.zp0671 .section,.zp0671 .contact{padding-left:18px;padding-right:18px}
.zp0671 .serviceGrid,.zp0671 .proof,.zp0671 .packages{grid-template-columns:1fr}
.zp0671 h1{font-size:clamp(42px,14vw,70px)}}

.zp0671 .heroActions a,.zp0671 .primary,.zp0671 .ctaBtn,.zp0671 .btnPrimary,.zp0671 .schedule>a,.zp0671 .newsletter>a{transition:all .2s ease}
.zp0671 .heroActions a:hover,.zp0671 .primary:hover,.zp0671 .ctaBtn:hover,.zp0671 .btnPrimary:hover{
  opacity:.8
}
.zp0671 nav a,.zp0671 .nav a,.zp0671 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0671 nav a:hover,.zp0671 .nav a:hover,.zp0671 .footer a:hover{
  color:var(--primary)
}
.zp0671 .serviceGrid article,.zp0671 .projectCard,.zp0671 .teamCard,.zp0671 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0671 .serviceGrid article:hover,.zp0671 .projectCard:hover,.zp0671 .teamCard:hover,.zp0671 .bentoCard:hover{
  transform:translateY(-3px)
}
@media(prefers-reduced-motion:reduce){.zp0671 *,.zp0671 *::before,.zp0671 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0671 a,.zp0671 button,.zp0671 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail vertical"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero canvasHero"><div className="canvasGrid"><i/><i/><i/><i/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Apply now</a><a href="#services">Explore</a></div></div></section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Apply now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Sports Editorial / manifesto-grid</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
