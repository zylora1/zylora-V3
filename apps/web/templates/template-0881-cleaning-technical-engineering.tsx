import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0881-cleaning-technical-engineering", "family": "Technical Engineering", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "classic-horizontal|magazine-cover|case-study-led|credentials>process>hours>packages>proof>services|square-editorial|friendly", "industry": "cleaning", "hero": "magazine-cover", "navigation": "classic-horizontal", "layout": "case-study-led"};

export default function Template0881({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Oak & Tide Cleaning Company");
  const headline = String(content.headline || "Reliable cleaning with simple scheduling, consistent teams, and clear scope.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Home cleaning", "Deep cleaning", "Move-out cleaning", "Office cleaning", "Recurring plans"];
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Pavilion Lead", "role": "Principal / Lead"}, {"name": "Bureau Team", "role": "Client experience"}, {"name": "Elm Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Cleaning company / Project A", "Cleaning company / Project B", "Cleaning company / Project C", "Cleaning company / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Reliable cleaning with simple scheduling, consistent teams, and clear scope. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d5b36a";
  return <main className="zp0881" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0881{--bg:#0a0a0a;--fg:#f5f0e8;--primary:#d5b36a;--primary-fg:#050505;--secondary:#8b6f47;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:24px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0881 *{box-sizing:border-box}
.zp0881 a{color:inherit;text-decoration:none}
.zp0881 h1,.zp0881 h2,.zp0881 h3,.zp0881 blockquote{font-family:Trebuchet MS, Arial, sans-serif;text-wrap:balance}
.zp0881 img{max-width:100%;display:block}
.zp0881 button,.zp0881 a{-webkit-tap-highlight-color:transparent}
.zp0881 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0881 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0881 .nav strong{font-family:Trebuchet MS, Arial, sans-serif;font-size:18px}
.zp0881 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0881 .mobileMenu{display:none}
.zp0881 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0881 .eyebrow,.zp0881 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0881 h1{font-size:clamp(48px,5.8vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0881 .visual,.zp0881 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0881 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0881 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(12deg)}
.zp0881 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0881 .heroPhoto{object-fit:cover}
.zp0881 .coverHero{grid-template-columns:.12fr 1.05fr .83fr;align-items:end}
.zp0881 .coverHero>h1{writing-mode:vertical-rl;transform:rotate(180deg);font-size:clamp(50px,8vw,130px);max-width:none}
.zp0881 .coverCaption{align-self:end}
.zp0881 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0881 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0881 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0881 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0881 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0881 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0881 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0881 .serviceGrid p{color:var(--muted)}
.zp0881 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0881 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0881 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0881 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0881 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0881 details{border-top:1px solid var(--border);padding:20px 0}
.zp0881 details summary{font-weight:800;cursor:pointer}
.zp0881 details p{color:var(--muted);max-width:70ch}
.zp0881 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0881 .hours dl{margin:0}
.zp0881 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0881 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0881 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0881 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0881 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0881 .packages>.sectionTitle{grid-column:1/-1}
.zp0881 .packages article{padding:24px;border:1px solid var(--border)}
.zp0881 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0881 .contact .eyebrow{color:var(--bg)}
.zp0881 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0881 .contactMeta{display:grid;gap:10px}
.zp0881 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-880{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0881 .hero{min-height:auto}
.zp0881 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0881 .proof{grid-template-columns:1fr 1fr}
.zp0881 .packages{grid-template-columns:1fr 1fr}
.zp0881 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0881 .nav nav{display:none}
.zp0881 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0881 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0881 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0881 .mobileMenu nav a{padding:10px 8px}
.zp0881 .hero,.zp0881 .coverHero{grid-template-columns:1fr}
.zp0881 .section,.zp0881 .sectionTitle,.zp0881 .hours,.zp0881 .contact{grid-template-columns:1fr}
.zp0881 .section{display:block}}
@media(max-width:430px){.zp0881{font-size:16px}
.zp0881 .hero,.zp0881 .section,.zp0881 .contact{padding-left:18px;padding-right:18px}
.zp0881 .serviceGrid,.zp0881 .proof,.zp0881 .packages{grid-template-columns:1fr}
.zp0881 h1{font-size:clamp(42px,14vw,70px)}}

.zp0881 .heroActions a,.zp0881 .primary,.zp0881 .ctaBtn,.zp0881 .btnPrimary,.zp0881 .schedule>a,.zp0881 .newsletter>a{transition:all .2s ease}
.zp0881 .heroActions a:hover,.zp0881 .primary:hover,.zp0881 .ctaBtn:hover,.zp0881 .btnPrimary:hover{
  border-color:var(--primary)
}
.zp0881 nav a,.zp0881 .nav a,.zp0881 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0881 nav a:hover,.zp0881 .nav a:hover,.zp0881 .footer a:hover{
  color:var(--primary)
}
.zp0881 .serviceGrid article,.zp0881 .projectCard,.zp0881 .teamCard,.zp0881 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0881 .serviceGrid article:hover,.zp0881 .projectCard:hover,.zp0881 .teamCard:hover,.zp0881 .bentoCard:hover{
  border-color:var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0881 *,.zp0881 *::before,.zp0881 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0881 a,.zp0881 button,.zp0881 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero coverHero"><div className="issue">Issue 0881</div><h1>{businessName}</h1>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">80</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="coverCaption"><b>{headline}</b><p>{description}</p></div></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Apply now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Technical Engineering / case-study-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
