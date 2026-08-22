import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0640-beauty-product-led-saas", "family": "Product-led SaaS", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "centered-logo|data-led|research-led|location>services>proof>availability>story|heavy-frame|brutal-display", "industry": "beauty", "hero": "data-led", "navigation": "centered-logo", "layout": "research-led"};

export default function Template0640({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Marrow Beauty Studio");
  const headline = String(content.headline || "Results-focused treatments in a calm studio with transparent recommendations.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Facials", "Brows", "Skin consultations", "Packages", "Gift cards"];
  const industryLabel = "Beauty studio";
  const serviceNotes = ["Ingredient-transparent formulations: every product listing includes the full INCI.", "Patch-test kits available before committing to any new treatment or product line.", "Skin consultation appointment included with all bespoke skincare programmes.", "Cruelty-free certified and vegan-formulated across the entire product range.", "Results photography at 4 and 8 weeks so you can see the change objectively."];
  const proofPoints = ["Cruelty Free International certified", "Vegan formulations", "Dermatologist tested", "Zero plastic packaging"];
  const storyQuote = "\u201cResults-focused treatments in a calm studio with transparent recommendations.\u201d";
  const storyBody = "Marrow Beauty Studio is presented as a real working beauty studio, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "My skin has genuinely changed in 8 weeks. The consultation at the start meant every product was right for my skin type.";
  const team = [{"name": "Harbor Lead", "role": "Principal / Lead"}, {"name": "Lumen Team", "role": "Client experience"}, {"name": "Juniper Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Beauty studio / Project A", "Beauty studio / Project B", "Beauty studio / Project C", "Beauty studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Results-focused treatments in a calm studio with transparent recommendations. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e44d76";
  return <main className="zp0640" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0640{--bg:#f9f6f1;--fg:#1a2030;--primary:#e44d76;--primary-fg:#050505;--secondary:#2f66d0;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:36px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0640 *{box-sizing:border-box}
.zp0640 a{color:inherit;text-decoration:none}
.zp0640 h1,.zp0640 h2,.zp0640 h3,.zp0640 blockquote{font-family:Arial Black, Arial, sans-serif;text-wrap:balance}
.zp0640 img{max-width:100%;display:block}
.zp0640 button,.zp0640 a{-webkit-tap-highlight-color:transparent}
.zp0640 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0640 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0640 .nav strong{font-family:Arial Black, Arial, sans-serif;font-size:18px}
.zp0640 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0640 .nav.centered strong{order:2;font-size:24px}
.zp0640 .nav.centered nav:first-child{order:1}
.zp0640 .nav.centered nav:last-child{order:3}
.zp0640 .mobileMenu{display:none}
.zp0640 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0640 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0640 .eyebrow,.zp0640 .sectionTitle>span,.zp0640 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0640 h1{font-size:clamp(48px,8.0vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0640 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0640 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0640 .heroActions a,.zp0640 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0640 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0640 .dataHero{grid-template-columns:.5fr 1.5fr}
.zp0640 .dataPanel{display:grid;gap:14px;padding:24px;border:1px solid var(--border);align-self:start}
.zp0640 .dataPanel b{font-size:90px;color:var(--fg);text-decoration:underline;text-decoration-color:var(--primary);text-decoration-thickness:5px}
.zp0640 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0640 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0640 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0640 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0640 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0640 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0640 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0640 .serviceGrid p{color:var(--muted)}
.zp0640 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0640 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0640 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0640 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0640 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0640 .story p{color:var(--muted)}
.zp0640 details{border-top:1px solid var(--border);padding:20px 0}
.zp0640 details summary{font-weight:800;cursor:pointer}
.zp0640 details p{color:var(--muted);max-width:70ch}
.zp0640 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0640 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0640 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0640 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0640 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0640 .contact .eyebrow{color:var(--bg)}
.zp0640 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0640 .contactMeta{display:grid;gap:10px}
.zp0640 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0640 .heroCopy{animation:enter-639 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-639{from{opacity:0;transform:translateY(37px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0640 .hero{min-height:auto}
.zp0640 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0640 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0640 .nav nav{display:none}
.zp0640 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0640 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0640 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0640 .mobileMenu nav a{padding:10px 8px}
.zp0640 .hero,.zp0640 .dataHero{grid-template-columns:1fr}
.zp0640 .section,.zp0640 .sectionTitle,.zp0640 .story,.zp0640 .location,.zp0640 .contact{grid-template-columns:1fr}
.zp0640 .section{display:block}}
@media(max-width:430px){.zp0640{font-size:16px}
.zp0640 .hero,.zp0640 .section,.zp0640 .contact{padding-left:18px;padding-right:18px}
.zp0640 .serviceGrid,.zp0640 .proof{grid-template-columns:1fr}
.zp0640 h1{font-size:clamp(42px,14vw,70px)}}

.zp0640 .heroActions a,.zp0640 .primary,.zp0640 .ctaBtn,.zp0640 .btnPrimary,.zp0640 .schedule>a,.zp0640 .newsletter>a{transition:all .2s ease}
.zp0640 .heroActions a:hover,.zp0640 .primary:hover,.zp0640 .ctaBtn:hover,.zp0640 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0640 nav a,.zp0640 .nav a,.zp0640 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0640 nav a:hover,.zp0640 .nav a:hover,.zp0640 .footer a:hover{
  color:var(--primary)
}
.zp0640 .serviceGrid article,.zp0640 .projectCard,.zp0640 .teamCard,.zp0640 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0640 .serviceGrid article:hover,.zp0640 .projectCard:hover,.zp0640 .teamCard:hover,.zp0640 .bentoCard:hover{
  box-shadow:0 4px 14px rgba(0,0,0,.15)
}
@media(prefers-reduced-motion:reduce){.zp0640 *,.zp0640 *::before,.zp0640 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0640 a,.zp0640 button,.zp0640 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav centered"><nav><a href="#services">Services</a></nav><strong>{businessName}</strong><nav><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero dataHero"><div className="dataPanel"><b>01</b><span>{services.length} core services</span><span>Local expertise</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">View selected work</a><a href="#services">Explore</a></div></div></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>View selected work</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Product-led SaaS / research-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
