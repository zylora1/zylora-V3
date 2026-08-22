import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0080-wellness-typographic-poster", "family": "Typographic Poster", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "centered-logo|asymmetric-editorial|dashboard-story|services>programmes>values>schedule>proof>research|heavy-frame|newspaper", "industry": "wellness", "hero": "asymmetric-editorial", "navigation": "centered-logo", "layout": "dashboard-story"};

export default function Template0080({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Kite Wellness Studio");
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
  const testimonial = "I've tried other wellness programmes. This is the first one that actually asked how my life works before suggesting changes.";
  const team = [{"name": "Stone & Pine Lead", "role": "Principal / Lead"}, {"name": "Foxglove Team", "role": "Client experience"}, {"name": "Atlas Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Wellness studio / Project A", "Wellness studio / Project B", "Wellness studio / Project C", "Wellness studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Restorative care with simple booking, transparent options, and a calm experience. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e44d76";
  return <main className="zp0080" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0080{--bg:#f9f6f1;--fg:#1a2030;--primary:#e44d76;--primary-fg:#050505;--secondary:#2f66d0;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:3px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:36px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0080 *{box-sizing:border-box}
.zp0080 a{color:inherit;text-decoration:none}
.zp0080 h1,.zp0080 h2,.zp0080 h3,.zp0080 blockquote{font-family:Times New Roman, serif;text-wrap:balance}
.zp0080 img{max-width:100%;display:block}
.zp0080 button,.zp0080 a{-webkit-tap-highlight-color:transparent}
.zp0080 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0080 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0080 .nav strong{font-family:Times New Roman, serif;font-size:18px}
.zp0080 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0080 .nav.centered strong{order:2;font-size:24px}
.zp0080 .nav.centered nav:first-child{order:1}
.zp0080 .nav.centered nav:last-child{order:3}
.zp0080 .mobileMenu{display:none}
.zp0080 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0080 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0080 .eyebrow,.zp0080 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0080 h1{font-size:clamp(48px,8.0vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0080 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0080 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0080 .heroActions a,.zp0080 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0080 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0080 .visual,.zp0080 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0080 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0080 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(12deg)}
.zp0080 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0080 .heroPhoto{object-fit:cover}
.zp0080 .asymHero{grid-template-columns:0.85fr 1.15fr}
.zp0080 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0080 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0080 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0080 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0080 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0080 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0080 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0080 .serviceGrid p{color:var(--muted)}
.zp0080 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0080 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0080 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0080 details{border-top:1px solid var(--border);padding:20px 0}
.zp0080 details summary{font-weight:800;cursor:pointer}
.zp0080 details p{color:var(--muted);max-width:70ch}
.zp0080 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0080 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Times New Roman, serif;letter-spacing:-.04em;max-width:17ch}
.zp0080 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0080 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0080 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0080 .researchRows{max-width:900px;margin-left:auto}
.zp0080 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0080 .contact .eyebrow{color:var(--bg)}
.zp0080 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0080 .contactMeta{display:grid;gap:10px}
.zp0080 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0080 .heroCopy{animation:enter-79 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-79{from{opacity:0;transform:translateY(37px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0080 .hero{min-height:auto}
.zp0080 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0080 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0080 .nav nav{display:none}
.zp0080 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0080 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0080 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0080 .mobileMenu nav a{padding:10px 8px}
.zp0080 .hero,.zp0080 .asymHero{grid-template-columns:1fr}
.zp0080 .section,.zp0080 .sectionTitle,.zp0080 .contact{grid-template-columns:1fr}
.zp0080 .section{display:block}}
@media(max-width:430px){.zp0080{font-size:16px}
.zp0080 .hero,.zp0080 .section,.zp0080 .contact{padding-left:18px;padding-right:18px}
.zp0080 .serviceGrid,.zp0080 .proof,.zp0080 .programmes>div:last-child{grid-template-columns:1fr}
.zp0080 h1{font-size:clamp(42px,14vw,70px)}}

.zp0080 .heroActions a,.zp0080 .primary,.zp0080 .ctaBtn,.zp0080 .btnPrimary,.zp0080 .schedule>a,.zp0080 .newsletter>a{transition:all .2s ease}
.zp0080 .heroActions a:hover,.zp0080 .primary:hover,.zp0080 .ctaBtn:hover,.zp0080 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0080 nav a,.zp0080 .nav a,.zp0080 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0080 nav a:hover,.zp0080 .nav a:hover,.zp0080 .footer a:hover{
  color:var(--primary)
}
.zp0080 .serviceGrid article,.zp0080 .projectCard,.zp0080 .teamCard,.zp0080 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0080 .serviceGrid article:hover,.zp0080 .projectCard:hover,.zp0080 .teamCard:hover,.zp0080 .bentoCard:hover{
  background:var(--surface)
}
@media(prefers-reduced-motion:reduce){.zp0080 *,.zp0080 *::before,.zp0080 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0080 a,.zp0080 button,.zp0080 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav centered"><nav><a href="#services">Services</a></nav><strong>{businessName}</strong><nav><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero asymHero"><div className="heroNumber">08</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">View selected work</a><a href="#services">Explore</a></div></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">79</span><div className="visualMark"/><small>{businessName}</small></div>}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>View selected work</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Typographic Poster / dashboard-story</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
