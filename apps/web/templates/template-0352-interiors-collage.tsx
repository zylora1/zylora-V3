import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0352-interiors-collage", "family": "Collage", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "centered-logo|data-led|research-led|hours>proof>location>story>services|heavy-frame|brutal-display", "industry": "interiors", "hero": "data-led", "navigation": "centered-logo", "layout": "research-led"};

export default function Template0352({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Marrow Interior Design Studio");
  const headline = String(content.headline || "Layered interiors with a clear point of view and rigorous attention to daily use.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Interior architecture", "Residential design", "Hospitality", "Furniture sourcing", "Styling"];
  const industryLabel = "Interior design studio";
  const serviceNotes = ["Full design service from brief to final installation, managed by a single lead designer.", "Trade access to furniture, fabrics, and lighting unavailable to the public.", "3D visualisations provided before any purchasing decisions are made.", "Project management including contractor coordination and quality sign-off.", "Styling and accessory curation for the finish that makes a space feel complete."];
  const proofPoints = ["BIID member", "3D renders included", "Trade pricing access", "Contractor network available"];
  const storyQuote = "\u201cLayered interiors with a clear point of view and rigorous attention to daily use.\u201d";
  const storyBody = "Marrow Interior Design Studio is presented as a real working interior design studio, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "The 3D renders before we started meant no surprises. The finished room was exactly what we'd imagined — just better executed.";
  const team = [{"name": "Harbor Lead", "role": "Principal / Lead"}, {"name": "Lumen Team", "role": "Client experience"}, {"name": "Juniper Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Interior design studio / Project A", "Interior design studio / Project B", "Interior design studio / Project C", "Interior design studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Layered interiors with a clear point of view and rigorous attention to daily use. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#8c9a4b";
  return <main className="zp0352" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0352{--bg:#f4f4ea;--fg:#24241e;--primary:#8c9a4b;--primary-fg:#050505;--secondary:#d18b47;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:36px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0352 *{box-sizing:border-box}
.zp0352 a{color:inherit;text-decoration:none}
.zp0352 h1,.zp0352 h2,.zp0352 h3,.zp0352 blockquote{font-family:Arial Black, Arial, sans-serif;text-wrap:balance}
.zp0352 img{max-width:100%;display:block}
.zp0352 button,.zp0352 a{-webkit-tap-highlight-color:transparent}
.zp0352 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0352 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0352 .nav strong{font-family:Arial Black, Arial, sans-serif;font-size:18px}
.zp0352 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0352 .nav.centered strong{order:2;font-size:24px}
.zp0352 .nav.centered nav:first-child{order:1}
.zp0352 .nav.centered nav:last-child{order:3}
.zp0352 .mobileMenu{display:none}
.zp0352 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0352 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0352 .eyebrow,.zp0352 .sectionTitle>span,.zp0352 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0352 h1{font-size:clamp(48px,6.35vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0352 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0352 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0352 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0352 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0352 .dataHero{grid-template-columns:.5fr 1.5fr}
.zp0352 .dataPanel{display:grid;gap:14px;padding:24px;border:1px solid var(--border);align-self:start}
.zp0352 .dataPanel b{font-size:90px;color:var(--fg);text-decoration:underline;text-decoration-color:var(--primary);text-decoration-thickness:5px}
.zp0352 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0352 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0352 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0352 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0352 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0352 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0352 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0352 .serviceGrid p{color:var(--muted)}
.zp0352 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0352 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0352 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0352 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0352 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0352 .story p{color:var(--muted)}
.zp0352 details{border-top:1px solid var(--border);padding:20px 0}
.zp0352 details summary{font-weight:800;cursor:pointer}
.zp0352 details p{color:var(--muted);max-width:70ch}
.zp0352 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0352 .hours dl{margin:0}
.zp0352 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0352 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0352 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0352 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0352 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0352 .contact .eyebrow{color:var(--bg)}
.zp0352 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0352 .contactMeta{display:grid;gap:10px}
.zp0352 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0352{background-image:repeating-linear-gradient(0deg,transparent 0 28px,color-mix(in srgb,var(--fg) 4%,transparent) 29px 30px)}
.zp0352 .section:nth-of-type(3n){transform:rotate(-0.35deg)}
.zp0352 .heroCopy{animation:enter-351 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-351{from{opacity:0;transform:translateY(29px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0352 .hero{min-height:auto}
.zp0352 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0352 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0352 .nav nav{display:none}
.zp0352 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0352 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0352 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0352 .mobileMenu nav a{padding:10px 8px}
.zp0352 .hero,.zp0352 .dataHero{grid-template-columns:1fr}
.zp0352 .section,.zp0352 .sectionTitle,.zp0352 .story,.zp0352 .hours,.zp0352 .location,.zp0352 .contact{grid-template-columns:1fr}
.zp0352 .section{display:block}}
@media(max-width:430px){.zp0352{font-size:16px}
.zp0352 .hero,.zp0352 .section,.zp0352 .contact{padding-left:18px;padding-right:18px}
.zp0352 .serviceGrid,.zp0352 .proof{grid-template-columns:1fr}
.zp0352 h1{font-size:clamp(42px,14vw,70px)}}

.zp0352 .heroActions a,.zp0352 .primary,.zp0352 .ctaBtn,.zp0352 .btnPrimary,.zp0352 .schedule>a,.zp0352 .newsletter>a{transition:all .2s ease}
.zp0352 .heroActions a:hover,.zp0352 .primary:hover,.zp0352 .ctaBtn:hover,.zp0352 .btnPrimary:hover{
  transform:rotate(1deg) scale(1.02)
}
.zp0352 nav a,.zp0352 .nav a,.zp0352 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0352 nav a:hover,.zp0352 .nav a:hover,.zp0352 .footer a:hover{
  color:var(--primary)
}
.zp0352 .serviceGrid article,.zp0352 .projectCard,.zp0352 .teamCard,.zp0352 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0352 .serviceGrid article:hover,.zp0352 .projectCard:hover,.zp0352 .teamCard:hover,.zp0352 .bentoCard:hover{
  transform:rotate(-1deg) scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0352 *,.zp0352 *::before,.zp0352 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0352 a,.zp0352 button,.zp0352 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav centered"><nav><a href="#services">Services</a></nav><strong>{businessName}</strong><nav><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero dataHero"><div className="dataPanel"><b>01</b><span>{services.length} core services</span><span>Local expertise</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Register now</a><a href="#services">Explore</a></div></div></section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Register now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Collage / research-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
