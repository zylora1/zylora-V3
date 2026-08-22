import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0664-spa-neumorphism", "family": "Neumorphism", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "corner-dock|video-frame|single-column-longform|pricing>newsletter>services>proof>faq|micro-radius|brutal-display", "industry": "spa", "hero": "video-frame", "navigation": "corner-dock", "layout": "single-column-longform"};

export default function Template0664({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Bureau Day Spa");
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
  const team = [{"name": "Atlas Lead", "role": "Principal / Lead"}, {"name": "Clove Team", "role": "Client experience"}, {"name": "Harbor Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Day spa / Project A", "Day spa / Project B", "Day spa / Project C", "Day spa / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A restorative pause with thoughtful treatments, quiet spaces, and easy booking. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e8572a";
  return <main className="zp0664" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0664{--bg:#2b190f;--fg:#fff4df;--primary:#e8572a;--primary-fg:#050505;--secondary:#4e8f64;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:36px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0664 *{box-sizing:border-box}
.zp0664 a{color:inherit;text-decoration:none}
.zp0664 h1,.zp0664 h2,.zp0664 h3,.zp0664 blockquote{font-family:Arial Black, Arial, sans-serif;text-wrap:balance}
.zp0664 img{max-width:100%;display:block}
.zp0664 button,.zp0664 a{-webkit-tap-highlight-color:transparent}
.zp0664 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0664 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0664 .nav strong{font-family:Arial Black, Arial, sans-serif;font-size:18px}
.zp0664 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0664 .mobileMenu{display:none}
.zp0664 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0664 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0664 .eyebrow,.zp0664 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0664 h1{font-size:clamp(48px,7.45vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0664 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0664 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0664 .heroActions a,.zp0664 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0664 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0664 .visual,.zp0664 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0664 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0664 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:4px;right:-8%;top:-18%;transform:rotate(8deg)}
.zp0664 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0664 .heroPhoto{object-fit:cover}
.zp0664 .videoHero{grid-template-columns:1fr 1fr}
.zp0664 .videoFrame{position:relative}
.zp0664 .videoFrame>span{position:absolute;inset:50% auto auto 50%;transform:translate(-50%,-50%);display:grid;place-items:center;width:72px;aspect-ratio:1;border-radius:50%;background:var(--fg);color:var(--bg)}
.zp0664 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0664 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0664 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0664 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0664 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0664 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0664 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0664 .serviceGrid p{color:var(--muted)}
.zp0664 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0664 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0664 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0664 .faqList{max-width:900px;margin-left:auto}
.zp0664 details{border-top:1px solid var(--border);padding:20px 0}
.zp0664 details summary{font-weight:800;cursor:pointer}
.zp0664 details p{color:var(--muted);max-width:70ch}
.zp0664 .priceRows{border-top:1px solid var(--border)}
.zp0664 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0664 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0664 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0664 .contact .eyebrow{color:var(--bg)}
.zp0664 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0664 .contactMeta{display:grid;gap:10px}
.zp0664 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0664 .section>*{max-width:820px;margin-left:auto;margin-right:auto}
.zp0664 .sectionTitle{display:block}
@media(max-width:1024px){.zp0664 .hero{min-height:auto}
.zp0664 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0664 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0664 .nav nav{display:none}
.zp0664 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0664 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0664 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0664 .mobileMenu nav a{padding:10px 8px}
.zp0664 .hero,.zp0664 .videoHero{grid-template-columns:1fr}
.zp0664 .section,.zp0664 .sectionTitle,.zp0664 .contact{grid-template-columns:1fr}
.zp0664 .section{display:block}}
@media(max-width:430px){.zp0664{font-size:16px}
.zp0664 .hero,.zp0664 .section,.zp0664 .contact{padding-left:18px;padding-right:18px}
.zp0664 .serviceGrid,.zp0664 .proof{grid-template-columns:1fr}
.zp0664 h1{font-size:clamp(42px,14vw,70px)}
.zp0664 .priceRows article{grid-template-columns:1fr}}

.zp0664 .heroActions a,.zp0664 .primary,.zp0664 .ctaBtn,.zp0664 .btnPrimary,.zp0664 .schedule>a,.zp0664 .newsletter>a{transition:all .2s ease}
.zp0664 .heroActions a:hover,.zp0664 .primary:hover,.zp0664 .ctaBtn:hover,.zp0664 .btnPrimary:hover{
  box-shadow:inset 2px 2px 6px color-mix(in srgb,var(--bg) 70%,black),inset -2px -2px 6px color-mix(in srgb,var(--bg) 70%,white)
}
.zp0664 nav a,.zp0664 .nav a,.zp0664 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0664 nav a:hover,.zp0664 .nav a:hover,.zp0664 .footer a:hover{
  color:var(--primary)
}
.zp0664 .serviceGrid article,.zp0664 .projectCard,.zp0664 .teamCard,.zp0664 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0664 .serviceGrid article:hover,.zp0664 .projectCard:hover,.zp0664 .teamCard:hover,.zp0664 .bentoCard:hover{
  box-shadow:inset 3px 3px 8px color-mix(in srgb,var(--bg) 70%,black),inset -3px -3px 8px color-mix(in srgb,var(--bg) 60%,white)
}
@keyframes zpEnter{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
.zp0664 .heroCopy{animation:zpEnter .7s cubic-bezier(.2,.8,.2,1) both}
.zp0664 .sectionTitle,.zp0664 .section>h2{animation:zpEnter .6s cubic-bezier(.2,.8,.2,1) .1s both}

.zp0664 .serviceGrid article,.zp0664 .packages article{
  border:none;
  background:var(--bg);
  box-shadow:6px 6px 14px color-mix(in srgb,var(--fg) 12%,transparent),-6px -6px 14px color-mix(in srgb,var(--fg) 3%,var(--bg));
  border-radius:16px
}
.zp0664 .serviceGrid article:nth-child(even),.zp0664 .proof>div{
  box-shadow:4px 4px 10px color-mix(in srgb,var(--fg) 10%,transparent),-4px -4px 10px color-mix(in srgb,var(--fg) 2%,var(--bg))
}
.zp0664 .proofLead,.zp0664 .proof>div{
  border:none;
  background:var(--bg);
  box-shadow:inset 3px 3px 8px color-mix(in srgb,var(--fg) 10%,transparent),inset -3px -3px 8px color-mix(in srgb,var(--fg) 2%,var(--bg))
}
@media(prefers-reduced-motion:reduce){.zp0664 *,.zp0664 *::before,.zp0664 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0664 a,.zp0664 button,.zp0664 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav dock"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero videoHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Plan your visit</a><a href="#services">Explore</a></div></div><div className="videoFrame">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">63</span><div className="visualMark"/><small>{businessName}</small></div>}<span>▶</span></div></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Plan your visit</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Neumorphism / single-column-longform</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
