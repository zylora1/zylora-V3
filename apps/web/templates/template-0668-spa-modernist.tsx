import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0668-spa-modernist", "family": "Modernist", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "minimal-wordmark|map-led|conversion-first|services>awards>comparison>proof>hours>faq|notched|product-ui", "industry": "spa", "hero": "map-led", "navigation": "minimal-wordmark", "layout": "conversion-first"};

export default function Template0668({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Elm Day Spa");
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
  const team = [{"name": "Clove Lead", "role": "Principal / Lead"}, {"name": "Harbor Team", "role": "Client experience"}, {"name": "Lumen Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Day spa / Project A", "Day spa / Project B", "Day spa / Project C", "Day spa / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "A restorative pause with thoughtful treatments, quiet spaces, and easy booking. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#55d8ff";
  return <main className="zp0668" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0668{--bg:#07111f;--fg:#e8f0ff;--primary:#55d8ff;--primary-fg:#050505;--secondary:#8477ff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:36px;background:var(--bg);color:var(--fg);font-family:Segoe UI, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0668 *{box-sizing:border-box}
.zp0668 a{color:inherit;text-decoration:none}
.zp0668 h1,.zp0668 h2,.zp0668 h3,.zp0668 blockquote{font-family:Segoe UI, Arial, sans-serif;text-wrap:balance}
.zp0668 img{max-width:100%;display:block}
.zp0668 button,.zp0668 a{-webkit-tap-highlight-color:transparent}
.zp0668 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0668 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0668 .nav strong{font-family:Segoe UI, Arial, sans-serif;font-size:18px}
.zp0668 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0668 .mobileMenu{display:none}
.zp0668 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0668 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0668 .eyebrow,.zp0668 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0668 h1{font-size:clamp(48px,6.9vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0668 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0668 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0668 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0668 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0668 .mapHero{grid-template-columns:1fr 1fr}
.zp0668 .mapLines{min-height:440px;position:relative;background:linear-gradient(22deg,transparent 48%,var(--primary) 49% 50%,transparent 51%),linear-gradient(-18deg,transparent 58%,var(--secondary) 59% 60%,transparent 61%)}
.zp0668 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0668 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0668 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0668 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0668 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0668 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0668 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0668 .serviceGrid p{color:var(--muted)}
.zp0668 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0668 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0668 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0668 .faqList{max-width:900px;margin-left:auto}
.zp0668 details{border-top:1px solid var(--border);padding:20px 0}
.zp0668 details summary{font-weight:800;cursor:pointer}
.zp0668 details p{color:var(--muted);max-width:70ch}
.zp0668 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0668 .hours dl{margin:0}
.zp0668 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0668 .awards>div{max-width:800px;margin-left:auto}
.zp0668 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0668 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0668 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0668 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0668 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0668 .contact .eyebrow{color:var(--bg)}
.zp0668 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0668 .contactMeta{display:grid;gap:10px}
.zp0668 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0668 .heroCopy{animation:enter-667 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-667{from{opacity:0;transform:translateY(25px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0668 .hero{min-height:auto}
.zp0668 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0668 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0668 .nav nav{display:none}
.zp0668 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0668 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0668 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0668 .mobileMenu nav a{padding:10px 8px}
.zp0668 .hero,.zp0668 .mapHero{grid-template-columns:1fr}
.zp0668 .section,.zp0668 .sectionTitle,.zp0668 .hours,.zp0668 .contact{grid-template-columns:1fr}
.zp0668 .section{display:block}}
@media(max-width:430px){.zp0668{font-size:16px}
.zp0668 .hero,.zp0668 .section,.zp0668 .contact{padding-left:18px;padding-right:18px}
.zp0668 .serviceGrid,.zp0668 .proof,.zp0668 .compareGrid{grid-template-columns:1fr}
.zp0668 h1{font-size:clamp(42px,14vw,70px)}}

.zp0668 .heroActions a,.zp0668 .primary,.zp0668 .ctaBtn,.zp0668 .btnPrimary,.zp0668 .schedule>a,.zp0668 .newsletter>a{transition:all .2s ease}
.zp0668 .heroActions a:hover,.zp0668 .primary:hover,.zp0668 .ctaBtn:hover,.zp0668 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0668 nav a,.zp0668 .nav a,.zp0668 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0668 nav a:hover,.zp0668 .nav a:hover,.zp0668 .footer a:hover{
  color:var(--primary)
}
.zp0668 .serviceGrid article,.zp0668 .projectCard,.zp0668 .teamCard,.zp0668 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0668 .serviceGrid article:hover,.zp0668 .projectCard:hover,.zp0668 .teamCard:hover,.zp0668 .bentoCard:hover{
  outline:2px solid var(--fg)
}
@media(prefers-reduced-motion:reduce){.zp0668 *,.zp0668 *::before,.zp0668 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0668 a,.zp0668 button,.zp0668 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav minimal"><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero mapHero"><div className="mapLines"><i/><i/><i/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">View selected work</a><a href="#services">Explore</a></div></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>View selected work</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Modernist / conversion-first</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
