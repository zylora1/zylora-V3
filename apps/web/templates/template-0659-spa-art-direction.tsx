import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0659-spa-art-direction", "family": "Art Direction", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "split-logo|vertical-image-rail|press-led|proof>collection>projects>testimonial>programmes>services|inset-panel|editorial-serif", "industry": "spa", "hero": "vertical-image-rail", "navigation": "split-logo", "layout": "press-led"};

export default function Template0659({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Stone & Pine Day Spa");
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
  const testimonialName = "Bureau client";
  const team = [{"name": "Mosaic Lead", "role": "Principal / Lead"}, {"name": "Kindred Team", "role": "Client experience"}, {"name": "Tandem Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Day spa / Project A", "Day spa / Project B", "Day spa / Project C", "Day spa / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A restorative pause with thoughtful treatments, quiet spaces, and easy booking. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d9703a";
  return <main className="zp0659" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0659{--bg:#10221b;--fg:#f4f0e6;--primary:#d9703a;--primary-fg:#050505;--secondary:#8db89b;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:16px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:32px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0659 *{box-sizing:border-box}
.zp0659 a{color:inherit;text-decoration:none}
.zp0659 h1,.zp0659 h2,.zp0659 h3,.zp0659 blockquote{font-family:Georgia, serif;text-wrap:balance}
.zp0659 img{max-width:100%;display:block}
.zp0659 button,.zp0659 a{-webkit-tap-highlight-color:transparent}
.zp0659 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0659 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0659 .nav strong{font-family:Georgia, serif;font-size:18px}
.zp0659 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0659 .mobileMenu{display:none}
.zp0659 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0659 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0659 .eyebrow,.zp0659 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0659 h1{font-size:clamp(48px,7.45vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0659 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0659 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0659 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0659 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0659 .visual,.zp0659 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0659 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0659 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:16px;right:-8%;top:-18%;transform:rotate(-12deg)}
.zp0659 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0659 .heroPhoto{object-fit:cover}
.zp0659 .verticalHero{grid-template-columns:.6fr 1.4fr}
.zp0659 .imageRail{height:70vh;display:grid;grid-template-rows:1fr .25fr;gap:12px}
.zp0659 .railBlock{background:var(--primary)}
.zp0659 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0659 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0659 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0659 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0659 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0659 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0659 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0659 .serviceGrid p{color:var(--muted)}
.zp0659 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0659 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0659 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0659 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0659 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0659 .testimonial>div{align-self:end}
.zp0659 .testimonial span{display:block;opacity:.7}
.zp0659 details{border-top:1px solid var(--border);padding:20px 0}
.zp0659 details summary{font-weight:800;cursor:pointer}
.zp0659 details p{color:var(--muted);max-width:70ch}
.zp0659 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0659 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0659 .projects article:nth-child(2){transform:translateY(32px)}
.zp0659 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0659 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0659 .p1,.zp0659 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0659 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0659 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0659 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0659 .contact .eyebrow{color:var(--bg)}
.zp0659 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0659 .contactMeta{display:grid;gap:10px}
.zp0659 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0659 .heroCopy{animation:enter-658 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-658{from{opacity:0;transform:translateY(36px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0659 .hero{min-height:auto}
.zp0659 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0659 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0659 .nav nav{display:none}
.zp0659 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0659 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0659 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0659 .mobileMenu nav a{padding:10px 8px}
.zp0659 .hero,.zp0659 .verticalHero{grid-template-columns:1fr}
.zp0659 .section,.zp0659 .sectionTitle,.zp0659 .contact{grid-template-columns:1fr}
.zp0659 .testimonial{grid-template-columns:1fr}
.zp0659 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0659 .projects .projectGrid{grid-template-columns:1fr}
.zp0659 .projects article:nth-child(2){transform:none}
.zp0659 .section{display:block}}
@media(max-width:430px){.zp0659{font-size:16px}
.zp0659 .hero,.zp0659 .section,.zp0659 .contact{padding-left:18px;padding-right:18px}
.zp0659 .serviceGrid,.zp0659 .proof,.zp0659 .collectionGrid,.zp0659 .programmes>div:last-child{grid-template-columns:1fr}
.zp0659 h1{font-size:clamp(42px,14vw,70px)}}

.zp0659 .heroActions a,.zp0659 .primary,.zp0659 .ctaBtn,.zp0659 .btnPrimary,.zp0659 .schedule>a,.zp0659 .newsletter>a{transition:all .2s ease}
.zp0659 .heroActions a:hover,.zp0659 .primary:hover,.zp0659 .ctaBtn:hover,.zp0659 .btnPrimary:hover{
  opacity:.85;letter-spacing:.06em
}
.zp0659 nav a,.zp0659 .nav a,.zp0659 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0659 nav a:hover,.zp0659 .nav a:hover,.zp0659 .footer a:hover{
  opacity:.7
}
.zp0659 .serviceGrid article,.zp0659 .projectCard,.zp0659 .teamCard,.zp0659 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0659 .serviceGrid article:hover,.zp0659 .projectCard:hover,.zp0659 .teamCard:hover,.zp0659 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0659 *,.zp0659 *::before,.zp0659 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0659 a,.zp0659 button,.zp0659 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav split"><nav><a href="#services">Services</a><a href="#proof">Proof</a></nav><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero verticalHero"><div className="imageRail">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">58</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="railBlock"/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Book an appointment</a><a href="#services">Explore</a></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Book an appointment</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Art Direction / press-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
