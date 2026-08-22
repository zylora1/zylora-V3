import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0660-spa-dark-cinematic", "family": "Dark Cinematic", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "transparent-overlay|product-led|stacked-posters|projects>press>hours>pricing>story>services>proof|cut-corners|literary", "industry": "spa", "hero": "product-led", "navigation": "transparent-overlay", "layout": "stacked-posters"};

export default function Template0660({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Pavilion Day Spa");
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
  const storyQuote = "\u201cA restorative pause with thoughtful treatments, quiet spaces, and easy booking.\u201d";
  const storyBody = "Pavilion Day Spa is presented as a real working day spa, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "The therapist spent 10 minutes asking about what I needed before any treatment. The session was precisely right.";
  const team = [{"name": "Foxglove Lead", "role": "Principal / Lead"}, {"name": "Atlas Team", "role": "Client experience"}, {"name": "Clove Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Day spa / Project A", "Day spa / Project B", "Day spa / Project C", "Day spa / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "A restorative pause with thoughtful treatments, quiet spaces, and easy booking. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#8d66ff";
  return <main className="zp0660" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0660{--bg:#f8f3ff;--fg:#181122;--primary:#8d66ff;--primary-fg:#050505;--secondary:#f39cd8;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:0px;--shadow:0 24px 70px color-mix(in srgb,var(--fg) 12%,transparent);--max:1440px;--space:36px;background:var(--bg);color:var(--fg);font-family:Helvetica Neue, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0660 *{box-sizing:border-box}
.zp0660 a{color:inherit;text-decoration:none}
.zp0660 h1,.zp0660 h2,.zp0660 h3,.zp0660 blockquote{font-family:Garamond, Georgia, serif;text-wrap:balance}
.zp0660 img{max-width:100%;display:block}
.zp0660 button,.zp0660 a{-webkit-tap-highlight-color:transparent}
.zp0660 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0660 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0660 .nav strong{font-family:Garamond, Georgia, serif;font-size:18px}
.zp0660 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0660 .nav.overlay{position:absolute;inset:0 0 auto;background:linear-gradient(180deg,color-mix(in srgb,var(--bg) 76%,transparent),transparent);border:0}
.zp0660 .mobileMenu{display:none}
.zp0660 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0660 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0660 .eyebrow,.zp0660 .sectionTitle>span,.zp0660 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0660 h1{font-size:clamp(48px,8.0vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0660 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0660 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0660 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0660 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0660 .visual,.zp0660 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0660 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0660 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:2px;right:-8%;top:-18%;transform:rotate(-8deg)}
.zp0660 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0660 .heroPhoto{object-fit:cover}
.zp0660 .productLedHero{grid-template-columns:1.1fr .9fr}
.zp0660 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0660 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0660 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0660 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0660 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0660 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0660 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0660 .serviceGrid p{color:var(--muted)}
.zp0660 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0660 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0660 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0660 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0660 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0660 .story p{color:var(--muted)}
.zp0660 details{border-top:1px solid var(--border);padding:20px 0}
.zp0660 details summary{font-weight:800;cursor:pointer}
.zp0660 details p{color:var(--muted);max-width:70ch}
.zp0660 .priceRows{border-top:1px solid var(--border)}
.zp0660 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0660 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0660 .hours dl{margin:0}
.zp0660 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0660 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0660 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0660 .projects article:nth-child(2){transform:translateY(32px)}
.zp0660 .awards>div{max-width:800px;margin-left:auto}
.zp0660 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0660 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0660 .contact .eyebrow{color:var(--bg)}
.zp0660 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0660 .contactMeta{display:grid;gap:10px}
.zp0660 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0660 .heroCopy{animation:enter-659 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-659{from{opacity:0;transform:translateY(37px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0660 .hero{min-height:auto}
.zp0660 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0660 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0660 .nav nav{display:none}
.zp0660 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0660 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0660 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0660 .mobileMenu nav a{padding:10px 8px}
.zp0660 .hero,.zp0660 .productLedHero{grid-template-columns:1fr}
.zp0660 .section,.zp0660 .sectionTitle,.zp0660 .story,.zp0660 .hours,.zp0660 .contact{grid-template-columns:1fr}
.zp0660 .projects .projectGrid{grid-template-columns:1fr}
.zp0660 .projects article:nth-child(2){transform:none}
.zp0660 .section{display:block}}
@media(max-width:430px){.zp0660{font-size:16px}
.zp0660 .hero,.zp0660 .section,.zp0660 .contact{padding-left:18px;padding-right:18px}
.zp0660 .serviceGrid,.zp0660 .proof{grid-template-columns:1fr}
.zp0660 h1{font-size:clamp(42px,14vw,70px)}
.zp0660 .priceRows article{grid-template-columns:1fr}}

.zp0660 .heroActions a,.zp0660 .primary,.zp0660 .ctaBtn,.zp0660 .btnPrimary,.zp0660 .schedule>a,.zp0660 .newsletter>a{transition:all .2s ease}
.zp0660 .heroActions a:hover,.zp0660 .primary:hover,.zp0660 .ctaBtn:hover,.zp0660 .btnPrimary:hover{
  opacity:.85;letter-spacing:.06em
}
.zp0660 nav a,.zp0660 .nav a,.zp0660 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0660 nav a:hover,.zp0660 .nav a:hover,.zp0660 .footer a:hover{
  opacity:.7
}
.zp0660 .serviceGrid article,.zp0660 .projectCard,.zp0660 .teamCard,.zp0660 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0660 .serviceGrid article:hover,.zp0660 .projectCard:hover,.zp0660 .teamCard:hover,.zp0660 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0660 *,.zp0660 *::before,.zp0660 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0660 a,.zp0660 button,.zp0660 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav overlay"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero productLedHero">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">59</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="productTitle"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Register now</a><a href="#services">Explore</a></div></div></div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Register now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Dark Cinematic / stacked-posters</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
