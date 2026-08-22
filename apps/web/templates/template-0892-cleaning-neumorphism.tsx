import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0892-cleaning-neumorphism", "family": "Neumorphism", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "minimal-wordmark|map-led|research-led|process>services>packages>location>proof|notched|sports-editorial", "industry": "cleaning", "hero": "map-led", "navigation": "minimal-wordmark", "layout": "research-led"};

export default function Template0892({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Elm Cleaning Company");
  const headline = String(content.headline || "Reliable cleaning with simple scheduling, consistent teams, and clear scope.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Home cleaning", "Deep cleaning", "Move-out cleaning", "Office cleaning", "Recurring plans"];
  const industryLabel = "Cleaning company";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Clove Lead", "role": "Principal / Lead"}, {"name": "Harbor Team", "role": "Client experience"}, {"name": "Lumen Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Cleaning company / Project A", "Cleaning company / Project B", "Cleaning company / Project C", "Cleaning company / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Reliable cleaning with simple scheduling, consistent teams, and clear scope. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff3b30";
  return <main className="zp0892" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0892{--bg:#f7f7f7;--fg:#101010;--primary:#ff3b30;--primary-fg:#050505;--secondary:#2222aa;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:36px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0892 *{box-sizing:border-box}
.zp0892 a{color:inherit;text-decoration:none}
.zp0892 h1,.zp0892 h2,.zp0892 h3,.zp0892 blockquote{font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;text-wrap:balance}
.zp0892 img{max-width:100%;display:block}
.zp0892 button,.zp0892 a{-webkit-tap-highlight-color:transparent}
.zp0892 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0892 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0892 .nav strong{font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;font-size:18px}
.zp0892 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0892 .mobileMenu{display:none}
.zp0892 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0892 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0892 .eyebrow,.zp0892 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0892 h1{font-size:clamp(48px,6.35vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0892 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0892 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0892 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0892 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0892 .mapHero{grid-template-columns:1fr 1fr}
.zp0892 .mapLines{min-height:440px;position:relative;background:linear-gradient(22deg,transparent 48%,var(--primary) 49% 50%,transparent 51%),linear-gradient(-18deg,transparent 58%,var(--secondary) 59% 60%,transparent 61%)}
.zp0892 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0892 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0892 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0892 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0892 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0892 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0892 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0892 .serviceGrid p{color:var(--muted)}
.zp0892 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0892 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0892 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0892 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0892 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0892 details{border-top:1px solid var(--border);padding:20px 0}
.zp0892 details summary{font-weight:800;cursor:pointer}
.zp0892 details p{color:var(--muted);max-width:70ch}
.zp0892 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0892 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0892 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0892 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0892 .packages>.sectionTitle{grid-column:1/-1}
.zp0892 .packages article{padding:24px;border:1px solid var(--border)}
.zp0892 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0892 .contact .eyebrow{color:var(--bg)}
.zp0892 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0892 .contactMeta{display:grid;gap:10px}
.zp0892 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0892 .heroCopy{animation:enter-891 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-891{from{opacity:0;transform:translateY(29px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0892 .hero{min-height:auto}
.zp0892 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0892 .proof{grid-template-columns:1fr 1fr}
.zp0892 .packages{grid-template-columns:1fr 1fr}
.zp0892 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0892 .nav nav{display:none}
.zp0892 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0892 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0892 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0892 .mobileMenu nav a{padding:10px 8px}
.zp0892 .hero,.zp0892 .mapHero{grid-template-columns:1fr}
.zp0892 .section,.zp0892 .sectionTitle,.zp0892 .location,.zp0892 .contact{grid-template-columns:1fr}
.zp0892 .section{display:block}}
@media(max-width:430px){.zp0892{font-size:16px}
.zp0892 .hero,.zp0892 .section,.zp0892 .contact{padding-left:18px;padding-right:18px}
.zp0892 .serviceGrid,.zp0892 .proof,.zp0892 .packages{grid-template-columns:1fr}
.zp0892 h1{font-size:clamp(42px,14vw,70px)}}

.zp0892 .heroActions a,.zp0892 .primary,.zp0892 .ctaBtn,.zp0892 .btnPrimary,.zp0892 .schedule>a,.zp0892 .newsletter>a{transition:all .2s ease}
.zp0892 .heroActions a:hover,.zp0892 .primary:hover,.zp0892 .ctaBtn:hover,.zp0892 .btnPrimary:hover{
  box-shadow:inset 2px 2px 6px color-mix(in srgb,var(--bg) 70%,black),inset -2px -2px 6px color-mix(in srgb,var(--bg) 70%,white)
}
.zp0892 nav a,.zp0892 .nav a,.zp0892 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0892 nav a:hover,.zp0892 .nav a:hover,.zp0892 .footer a:hover{
  color:var(--primary)
}
.zp0892 .serviceGrid article,.zp0892 .projectCard,.zp0892 .teamCard,.zp0892 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0892 .serviceGrid article:hover,.zp0892 .projectCard:hover,.zp0892 .teamCard:hover,.zp0892 .bentoCard:hover{
  box-shadow:inset 3px 3px 8px color-mix(in srgb,var(--bg) 70%,black),inset -3px -3px 8px color-mix(in srgb,var(--bg) 60%,white)
}

.zp0892 .serviceGrid article,.zp0892 .packages article{
  border:none;
  background:var(--bg);
  box-shadow:6px 6px 14px color-mix(in srgb,var(--fg) 12%,transparent),-6px -6px 14px color-mix(in srgb,var(--fg) 3%,var(--bg));
  border-radius:16px
}
.zp0892 .serviceGrid article:nth-child(even),.zp0892 .proof>div{
  box-shadow:4px 4px 10px color-mix(in srgb,var(--fg) 10%,transparent),-4px -4px 10px color-mix(in srgb,var(--fg) 2%,var(--bg))
}
.zp0892 .proofLead,.zp0892 .proof>div{
  border:none;
  background:var(--bg);
  box-shadow:inset 3px 3px 8px color-mix(in srgb,var(--fg) 10%,transparent),inset -3px -3px 8px color-mix(in srgb,var(--fg) 2%,var(--bg))
}
@media(prefers-reduced-motion:reduce){.zp0892 *,.zp0892 *::before,.zp0892 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0892 a,.zp0892 button,.zp0892 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav minimal"><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero mapHero"><div className="mapLines"><i/><i/><i/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">View selected work</a><a href="#services">Explore</a></div></div></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>View selected work</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Neumorphism / research-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
