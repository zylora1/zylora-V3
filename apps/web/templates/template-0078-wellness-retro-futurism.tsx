import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0078-wellness-retro-futurism", "family": "Retro Futurism", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "asymmetric-cluster|carousel-frame|image-led-chapters|testimonial>proof>services>pricing>story>packages>projects|circular|neo-grotesk", "industry": "wellness", "hero": "carousel-frame", "navigation": "asymmetric-cluster", "layout": "image-led-chapters"};

export default function Template0078({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Slate Wellness Studio");
  const headline = String(content.headline || "Restorative care with simple booking, transparent options, and a calm experience.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Massage therapy", "Recovery sessions", "Nutrition consults", "Breathwork", "Wellness memberships"];
  const industryLabel = "Wellness studio";
  const serviceNotes = ["Personalised programmes that fit around your work, sleep and lifestyle patterns.", "Evidence-informed practice — we explain the science behind every recommendation.", "Mind-body integration sessions that address stress, movement, and recovery together.", "Nutritional guidance grounded in practical, sustainable food choices.", "Group and one-to-one formats to match your preference for accountability."];
  const proofPoints = ["Certified practitioners", "Online and in-person", "Programme tracking included", "Community support group"];
  const storyQuote = "\u201cRestorative care with simple booking, transparent options, and a calm experience.\u201d";
  const storyBody = "Slate Wellness Studio is presented as a real working wellness studio, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "I've tried other wellness programmes. This is the first one that actually asked how my life works before suggesting changes.";
  const testimonialName = "Stone & Pine client";
  const team = [{"name": "Oak & Tide Lead", "role": "Principal / Lead"}, {"name": "Studio Nine Team", "role": "Client experience"}, {"name": "Foundry Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Wellness studio / Project A", "Wellness studio / Project B", "Wellness studio / Project C", "Wellness studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Restorative care with simple booking, transparent options, and a calm experience. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff5449";
  return <main className="zp0078" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0078{--bg:#18090c;--fg:#fff3f1;--primary:#ff5449;--primary-fg:#050505;--secondary:#f6c65b;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:999px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:28px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0078 *{box-sizing:border-box}
.zp0078 a{color:inherit;text-decoration:none}
.zp0078 h1,.zp0078 h2,.zp0078 h3,.zp0078 blockquote{font-family:Helvetica Neue, Arial, sans-serif;text-wrap:balance}
.zp0078 img{max-width:100%;display:block}
.zp0078 button,.zp0078 a{-webkit-tap-highlight-color:transparent}
.zp0078 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0078 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0078 .nav strong{font-family:Helvetica Neue, Arial, sans-serif;font-size:18px}
.zp0078 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0078 .nav.cluster{align-items:flex-end}
.zp0078 .mobileMenu{display:none}
.zp0078 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0078 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0078 .eyebrow,.zp0078 .sectionTitle>span,.zp0078 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0078 h1{font-size:clamp(48px,6.9vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0078 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0078 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0078 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0078 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0078 .visual,.zp0078 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0078 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0078 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:50%;right:-8%;top:-18%;transform:rotate(4deg)}
.zp0078 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0078 .heroPhoto{object-fit:cover}
.zp0078 .carouselHero{grid-template-columns:auto 1fr 1fr}
.zp0078 .rail{display:grid;align-content:center;gap:18px;font-weight:900}
.zp0078 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0078 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0078 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0078 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0078 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0078 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0078 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0078 .serviceGrid p{color:var(--muted)}
.zp0078 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0078 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0078 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0078 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0078 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0078 .story p{color:var(--muted)}
.zp0078 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0078 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0078 .testimonial>div{align-self:end}
.zp0078 .testimonial span{display:block;opacity:.7}
.zp0078 details{border-top:1px solid var(--border);padding:20px 0}
.zp0078 details summary{font-weight:800;cursor:pointer}
.zp0078 details p{color:var(--muted);max-width:70ch}
.zp0078 .priceRows{border-top:1px solid var(--border)}
.zp0078 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0078 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0078 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0078 .projects article:nth-child(2){transform:translateY(32px)}
.zp0078 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0078 .packages>.sectionTitle{grid-column:1/-1}
.zp0078 .packages article{padding:24px;border:1px solid var(--border)}
.zp0078 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0078 .contact .eyebrow{color:var(--bg)}
.zp0078 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0078 .contactMeta{display:grid;gap:10px}
.zp0078 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0078 .heroCopy{animation:enter-77 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-77{from{opacity:0;transform:translateY(35px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0078 .hero{min-height:auto}
.zp0078 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0078 .proof{grid-template-columns:1fr 1fr}
.zp0078 .packages{grid-template-columns:1fr 1fr}
.zp0078 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0078 .nav nav{display:none}
.zp0078 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0078 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0078 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0078 .mobileMenu nav a{padding:10px 8px}
.zp0078 .hero,.zp0078 .carouselHero{grid-template-columns:1fr}
.zp0078 .section,.zp0078 .sectionTitle,.zp0078 .story,.zp0078 .contact{grid-template-columns:1fr}
.zp0078 .testimonial{grid-template-columns:1fr}
.zp0078 .projects .projectGrid{grid-template-columns:1fr}
.zp0078 .projects article:nth-child(2){transform:none}
.zp0078 .section{display:block}}
@media(max-width:430px){.zp0078{font-size:16px}
.zp0078 .hero,.zp0078 .section,.zp0078 .contact{padding-left:18px;padding-right:18px}
.zp0078 .serviceGrid,.zp0078 .proof,.zp0078 .packages{grid-template-columns:1fr}
.zp0078 h1{font-size:clamp(42px,14vw,70px)}
.zp0078 .priceRows article{grid-template-columns:1fr}}

.zp0078 .heroActions a,.zp0078 .primary,.zp0078 .ctaBtn,.zp0078 .btnPrimary,.zp0078 .schedule>a,.zp0078 .newsletter>a{transition:all .2s ease}
.zp0078 .heroActions a:hover,.zp0078 .primary:hover,.zp0078 .ctaBtn:hover,.zp0078 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);box-shadow:0 0 20px color-mix(in srgb,var(--primary) 40%,transparent)
}
.zp0078 nav a,.zp0078 .nav a,.zp0078 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0078 nav a:hover,.zp0078 .nav a:hover,.zp0078 .footer a:hover{
  color:var(--primary)
}
.zp0078 .serviceGrid article,.zp0078 .projectCard,.zp0078 .teamCard,.zp0078 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0078 .serviceGrid article:hover,.zp0078 .projectCard:hover,.zp0078 .teamCard:hover,.zp0078 .bentoCard:hover{
  box-shadow:0 0 12px color-mix(in srgb,var(--primary) 30%,transparent)
}
@media(prefers-reduced-motion:reduce){.zp0078 *,.zp0078 *::before,.zp0078 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0078 a,.zp0078 button,.zp0078 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav cluster"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav><span>Est. 2026</span></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero carouselHero"><div className="rail"><span>01</span><span>02</span><span>03</span></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">77</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Schedule a consultation</a><a href="#services">Explore</a></div></div></section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Schedule a consultation</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Retro Futurism / image-led-chapters</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
