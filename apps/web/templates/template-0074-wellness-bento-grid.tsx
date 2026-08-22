import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0074-wellness-bento-grid", "family": "Bento Grid", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "left-sidebar|service-led|full-bleed-chapters|story>services>features>proof>integrations>packages|paper-sheet|modernist-duo", "industry": "wellness", "hero": "service-led", "navigation": "left-sidebar", "layout": "full-bleed-chapters"};

export default function Template0074({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Arc Wellness Studio");
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
  const storyBody = "Arc Wellness Studio is presented as a real working wellness studio, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "I've tried other wellness programmes. This is the first one that actually asked how my life works before suggesting changes.";
  const team = [{"name": "Civic Lead", "role": "Principal / Lead"}, {"name": "Oak & Tide Team", "role": "Client experience"}, {"name": "Studio Nine Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Wellness studio / Project A", "Wellness studio / Project B", "Wellness studio / Project C", "Wellness studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Restorative care with simple booking, transparent options, and a calm experience. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#81946f";
  return <main className="zp0074" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0074{--bg:#f4eee5;--fg:#302821;--primary:#81946f;--primary-fg:#050505;--secondary:#c55d4d;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:3px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:28px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0074 *{box-sizing:border-box}
.zp0074 a{color:inherit;text-decoration:none}
.zp0074 h1,.zp0074 h2,.zp0074 h3,.zp0074 blockquote{font-family:Futura, Avenir, Arial, sans-serif;text-wrap:balance}
.zp0074 img{max-width:100%;display:block}
.zp0074 button,.zp0074 a{-webkit-tap-highlight-color:transparent}
.zp0074 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0074 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0074 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0074 .mobileMenu{display:none}
.zp0074:has(.navRail)>.hero,.zp0074:has(.navRail)>.section,.zp0074:has(.navRail)>.contact,.zp0074:has(.navRail)>.footer{margin-left:190px}
.zp0074 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0074 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0074 .eyebrow,.zp0074 .sectionTitle>span,.zp0074 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0074 h1{font-size:clamp(48px,7.45vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0074 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0074 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0074 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0074 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0074 .serviceHero{grid-template-columns:.65fr 1.35fr}
.zp0074 .serviceHeroList{display:grid;gap:4px}
.zp0074 .serviceHeroList span{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0074 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0074 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0074 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0074 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0074 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0074 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0074 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0074 .serviceGrid p{color:var(--muted)}
.zp0074 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0074 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0074 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0074 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0074 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0074 .story p{color:var(--muted)}
.zp0074 details{border-top:1px solid var(--border);padding:20px 0}
.zp0074 details summary{font-weight:800;cursor:pointer}
.zp0074 details p{color:var(--muted);max-width:70ch}
.zp0074 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0074 .features ul{list-style:none;margin:0;padding:0}
.zp0074 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0074 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0074 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0074 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0074 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0074 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0074 .packages>.sectionTitle{grid-column:1/-1}
.zp0074 .packages article{padding:24px;border:1px solid var(--border)}
.zp0074 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0074 .contact .eyebrow{color:var(--bg)}
.zp0074 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0074 .contactMeta{display:grid;gap:10px}
.zp0074 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0074 .section:nth-of-type(even){margin:0 2vw;background:var(--surface)}
.zp0074 .heroCopy{animation:enter-73 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-73{from{opacity:0;transform:translateY(31px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0074 .hero{min-height:auto}
.zp0074 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0074 .proof{grid-template-columns:1fr 1fr}
.zp0074 .packages{grid-template-columns:1fr 1fr}
.zp0074 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0074 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0074 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0074 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0074 .mobileMenu nav a{padding:10px 8px}
.zp0074 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0074:has(.navRail)>.hero,.zp0074:has(.navRail)>.section,.zp0074:has(.navRail)>.contact,.zp0074:has(.navRail)>.footer{margin-left:0}
.zp0074 .hero,.zp0074 .serviceHero{grid-template-columns:1fr}
.zp0074 .section,.zp0074 .sectionTitle,.zp0074 .story,.zp0074 .features,.zp0074 .contact{grid-template-columns:1fr}
.zp0074 .section{display:block}}
@media(max-width:430px){.zp0074{font-size:16px}
.zp0074 .hero,.zp0074 .section,.zp0074 .contact{padding-left:18px;padding-right:18px}
.zp0074 .serviceGrid,.zp0074 .proof,.zp0074 .packages{grid-template-columns:1fr}
.zp0074 h1{font-size:clamp(42px,14vw,70px)}}

.zp0074 .heroActions a,.zp0074 .primary,.zp0074 .ctaBtn,.zp0074 .btnPrimary,.zp0074 .schedule>a,.zp0074 .newsletter>a{transition:all .2s ease}
.zp0074 .heroActions a:hover,.zp0074 .primary:hover,.zp0074 .ctaBtn:hover,.zp0074 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0074 nav a,.zp0074 .nav a,.zp0074 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0074 nav a:hover,.zp0074 .nav a:hover,.zp0074 .footer a:hover{
  color:var(--primary)
}
.zp0074 .serviceGrid article,.zp0074 .projectCard,.zp0074 .teamCard,.zp0074 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0074 .serviceGrid article:hover,.zp0074 .projectCard:hover,.zp0074 .teamCard:hover,.zp0074 .bentoCard:hover{
  transform:translateY(-3px);box-shadow:0 8px 20px rgba(0,0,0,.1)
}
@media(prefers-reduced-motion:reduce){.zp0074 *,.zp0074 *::before,.zp0074 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0074 a,.zp0074 button,.zp0074 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero serviceHero"><div className="serviceHeroList">{services.slice(0,4).map((s,i)=><span key={s}>{String(i+1).padStart(2,"0")} — {s}</span>)}</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a demo</a><a href="#services">Explore</a></div></div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a demo</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Bento Grid / full-bleed-chapters</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
