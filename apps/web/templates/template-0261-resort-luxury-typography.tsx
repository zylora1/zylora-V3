import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0261-resort-luxury-typography", "family": "Luxury Typography", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "lower-third|testimonial-led|community-led|programmes>process>proof>availability>awards>faq>services|ticket-edge|humanist-classic", "industry": "resort", "hero": "testimonial-led", "navigation": "lower-third", "layout": "community-led"};

export default function Template0261({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Aster Resort");
  const headline = String(content.headline || "A destination stay combining privacy, landscape, food, and considered service.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Villas", "Wellness", "Dining", "Excursions", "Celebrations"];
  const industryLabel = "Resort";
  const serviceNotes = ["All-inclusive packages covering dining, spa, water sports, and excursions.", "Private beach with supervised swim zones and non-motorised water sports included.", "Kids' programme for ages 4–14 supervised by qualified childcare professionals.", "Adults-only pool deck and lounge for guests seeking a quieter experience.", "Dedicated wedding and event planning service with full on-site coordination."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["TripAdvisor Travellers' Choice", "Butler service on villas", "Included water sports", "Non-motorised sports free"];
  const testimonial = "The family holiday I didn't think we could afford to be perfect. The team anticipated everything before we asked.";
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Common Lead", "role": "Principal / Lead"}, {"name": "Stillwater Team", "role": "Client experience"}, {"name": "Kite Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Resort / Project A", "Resort / Project B", "Resort / Project C", "Resort / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "A destination stay combining privacy, landscape, food, and considered service. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ffcc33";
  return <main className="zp0261" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0261{--bg:#101218;--fg:#f7f5f0;--primary:#ffcc33;--primary-fg:#050505;--secondary:#3f7cff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:8px;--line:1px;--shadow:0 24px 70px color-mix(in srgb,var(--fg) 12%,transparent);--max:1120px;--space:24px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0261 *{box-sizing:border-box}
.zp0261 a{color:inherit;text-decoration:none}
.zp0261 h1,.zp0261 h2,.zp0261 h3,.zp0261 blockquote{font-family:Baskerville, Georgia, serif;text-wrap:balance}
.zp0261 img{max-width:100%;display:block}
.zp0261 button,.zp0261 a{-webkit-tap-highlight-color:transparent}
.zp0261 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0261 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0261 .nav strong{font-family:Baskerville, Georgia, serif;font-size:18px}
.zp0261 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0261 .nav.lower{position:absolute;top:auto;bottom:0;width:100%;border-top:var(--line) solid var(--border)}
.zp0261 .mobileMenu{display:none}
.zp0261 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0261 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0261 .eyebrow,.zp0261 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0261 h1{font-size:clamp(48px,5.8vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0261 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0261 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0261 .heroActions a,.zp0261 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0261 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0261 .quoteHero{grid-template-columns:1fr 1fr}
.zp0261 .quoteHero blockquote{font-size:clamp(36px,5vw,76px);line-height:.98;margin:0}
.zp0261 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0261 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0261 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0261 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0261 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0261 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0261 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0261 .serviceGrid p{color:var(--muted)}
.zp0261 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0261 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0261 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0261 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0261 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0261 .faqList{max-width:900px;margin-left:auto}
.zp0261 details{border-top:1px solid var(--border);padding:20px 0}
.zp0261 details summary{font-weight:800;cursor:pointer}
.zp0261 details p{color:var(--muted);max-width:70ch}
.zp0261 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0261 .awards>div{max-width:800px;margin-left:auto}
.zp0261 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0261 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0261 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0261 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0261 .contact .eyebrow{color:var(--bg)}
.zp0261 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0261 .contactMeta{display:grid;gap:10px}
.zp0261 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0261 .heroCopy{animation:enter-260 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-260{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0261 .hero{min-height:auto}
.zp0261 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0261 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0261 .nav nav{display:none}
.zp0261 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0261 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0261 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0261 .mobileMenu nav a{padding:10px 8px}
.zp0261 .hero,.zp0261 .quoteHero{grid-template-columns:1fr}
.zp0261 .section,.zp0261 .sectionTitle,.zp0261 .contact{grid-template-columns:1fr}
.zp0261 .section{display:block}}
@media(max-width:430px){.zp0261{font-size:16px}
.zp0261 .hero,.zp0261 .section,.zp0261 .contact{padding-left:18px;padding-right:18px}
.zp0261 .serviceGrid,.zp0261 .proof,.zp0261 .programmes>div:last-child{grid-template-columns:1fr}
.zp0261 h1{font-size:clamp(42px,14vw,70px)}}

.zp0261 .heroActions a,.zp0261 .primary,.zp0261 .ctaBtn,.zp0261 .btnPrimary,.zp0261 .schedule>a,.zp0261 .newsletter>a{transition:all .2s ease}
.zp0261 .heroActions a:hover,.zp0261 .primary:hover,.zp0261 .ctaBtn:hover,.zp0261 .btnPrimary:hover{
  opacity:.8;letter-spacing:.06em
}
.zp0261 nav a,.zp0261 .nav a,.zp0261 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0261 nav a:hover,.zp0261 .nav a:hover,.zp0261 .footer a:hover{
  opacity:.65
}
.zp0261 .serviceGrid article,.zp0261 .projectCard,.zp0261 .teamCard,.zp0261 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0261 .serviceGrid article:hover,.zp0261 .projectCard:hover,.zp0261 .teamCard:hover,.zp0261 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0261 *,.zp0261 *::before,.zp0261 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0261 a,.zp0261 button,.zp0261 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav lower"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero quoteHero"><blockquote>“Clear, thoughtful, and easy to work with.”</blockquote><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Check availability</a><a href="#services">Explore</a></div></div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Check availability</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Luxury Typography / community-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
