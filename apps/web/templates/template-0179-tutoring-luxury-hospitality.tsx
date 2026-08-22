import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0179-tutoring-luxury-hospitality", "family": "Luxury Hospitality", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "split-logo|vertical-image-rail|asymmetric-5-7|collection>services>credentials>story>packages>proof|inset-panel|editorial-serif", "industry": "tutoring", "hero": "vertical-image-rail", "navigation": "split-logo", "layout": "asymmetric-5-7"};

export default function Template0179({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Stone & Pine Tutoring Service");
  const headline = String(content.headline || "One-to-one learning support shaped around the student, not a fixed worksheet.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Math tutoring", "Science tutoring", "Language support", "Exam revision", "Study planning"];
  const industryLabel = "Tutoring service";
  const serviceNotes = ["Subject specialists with teaching experience, not just degree holders.", "Diagnostic assessment in the first session to find gaps, not just reinforce strengths.", "Exam technique coaching alongside subject knowledge — both matter equally.", "Flexible booking: weekly recurring, intensive blocks, or exam-season only.", "Parent briefings every six weeks with written progress summaries."];
  const proofPoints = ["QTS and subject specialists", "98% report grade improvement", "DBS enhanced checked", "Flexible scheduling"];
  const storyQuote = "\u201cOne-to-one learning support shaped around the student, not a fixed worksheet.\u201d";
  const storyBody = "Stone & Pine Tutoring Service is presented as a real working tutoring service, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "My daughter went from a predicted C to an A in English. The tutor spotted the exact issue in session one.";
  const team = [{"name": "Mosaic Lead", "role": "Principal / Lead"}, {"name": "Kindred Team", "role": "Client experience"}, {"name": "Tandem Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Tutoring service / Project A", "Tutoring service / Project B", "Tutoring service / Project C", "Tutoring service / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "One-to-one learning support shaped around the student, not a fixed worksheet. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d9703a";
  return <main className="zp0179" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0179{--bg:#10221b;--fg:#f4f0e6;--primary:#d9703a;--primary-fg:#050505;--secondary:#8db89b;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:16px;--line:1px;--shadow:0 24px 70px color-mix(in srgb,var(--fg) 12%,transparent);--max:1360px;--space:32px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0179 *{box-sizing:border-box}
.zp0179 a{color:inherit;text-decoration:none}
.zp0179 h1,.zp0179 h2,.zp0179 h3,.zp0179 blockquote{font-family:Georgia, serif;text-wrap:balance}
.zp0179 img{max-width:100%;display:block}
.zp0179 button,.zp0179 a{-webkit-tap-highlight-color:transparent}
.zp0179 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0179 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0179 .nav strong{font-family:Georgia, serif;font-size:18px}
.zp0179 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0179 .mobileMenu{display:none}
.zp0179 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0179 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0179 .eyebrow,.zp0179 .sectionTitle>span,.zp0179 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0179 h1{font-size:clamp(48px,7.45vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0179 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0179 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0179 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0179 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0179 .visual,.zp0179 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0179 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0179 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:16px;right:-8%;top:-18%;transform:rotate(12deg)}
.zp0179 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0179 .heroPhoto{object-fit:cover}
.zp0179 .verticalHero{grid-template-columns:.6fr 1.4fr}
.zp0179 .imageRail{height:70vh;display:grid;grid-template-rows:1fr .25fr;gap:12px}
.zp0179 .railBlock{background:var(--primary)}
.zp0179 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0179 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0179 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0179 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0179 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0179 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0179 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0179 .serviceGrid p{color:var(--muted)}
.zp0179 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0179 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0179 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0179 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0179 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0179 .story p{color:var(--muted)}
.zp0179 details{border-top:1px solid var(--border);padding:20px 0}
.zp0179 details summary{font-weight:800;cursor:pointer}
.zp0179 details p{color:var(--muted);max-width:70ch}
.zp0179 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0179 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0179 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0179 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0179 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0179 .p1,.zp0179 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0179 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0179 .packages>.sectionTitle{grid-column:1/-1}
.zp0179 .packages article{padding:24px;border:1px solid var(--border)}
.zp0179 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0179 .contact .eyebrow{color:var(--bg)}
.zp0179 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0179 .contactMeta{display:grid;gap:10px}
.zp0179 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0179 .section:nth-of-type(odd){padding-left:max(24px,calc((100vw - var(--max))/2 + 7vw))}
.zp0179 .heroCopy{animation:enter-178 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-178{from{opacity:0;transform:translateY(36px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0179 .hero{min-height:auto}
.zp0179 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0179 .proof{grid-template-columns:1fr 1fr}
.zp0179 .packages{grid-template-columns:1fr 1fr}
.zp0179 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0179 .nav nav{display:none}
.zp0179 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0179 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0179 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0179 .mobileMenu nav a{padding:10px 8px}
.zp0179 .hero,.zp0179 .verticalHero{grid-template-columns:1fr}
.zp0179 .section,.zp0179 .sectionTitle,.zp0179 .story,.zp0179 .contact{grid-template-columns:1fr}
.zp0179 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0179 .section{display:block}}
@media(max-width:430px){.zp0179{font-size:16px}
.zp0179 .hero,.zp0179 .section,.zp0179 .contact{padding-left:18px;padding-right:18px}
.zp0179 .serviceGrid,.zp0179 .proof,.zp0179 .collectionGrid,.zp0179 .packages{grid-template-columns:1fr}
.zp0179 h1{font-size:clamp(42px,14vw,70px)}}

.zp0179 .heroActions a,.zp0179 .primary,.zp0179 .ctaBtn,.zp0179 .btnPrimary,.zp0179 .schedule>a,.zp0179 .newsletter>a{transition:all .2s ease}
.zp0179 .heroActions a:hover,.zp0179 .primary:hover,.zp0179 .ctaBtn:hover,.zp0179 .btnPrimary:hover{
  opacity:.8;letter-spacing:.06em
}
.zp0179 nav a,.zp0179 .nav a,.zp0179 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0179 nav a:hover,.zp0179 .nav a:hover,.zp0179 .footer a:hover{
  opacity:.65
}
.zp0179 .serviceGrid article,.zp0179 .projectCard,.zp0179 .teamCard,.zp0179 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0179 .serviceGrid article:hover,.zp0179 .projectCard:hover,.zp0179 .teamCard:hover,.zp0179 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0179 *,.zp0179 *::before,.zp0179 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0179 a,.zp0179 button,.zp0179 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav split"><nav><a href="#services">Services</a><a href="#proof">Proof</a></nav><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero verticalHero"><div className="imageRail">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">78</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="railBlock"/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Send an enquiry</a><a href="#services">Explore</a></div></div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Send an enquiry</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Luxury Hospitality / asymmetric-5-7</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
