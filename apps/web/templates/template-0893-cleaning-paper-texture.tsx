import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0893-cleaning-paper-texture", "family": "Paper Texture", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "compact-floating|floating-panels|gallery-index|services>schedule>proof>projects>community>location|hard-outline|condensed-editorial", "industry": "cleaning", "hero": "floating-panels", "navigation": "compact-floating", "layout": "gallery-index"};

export default function Template0893({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Rook Cleaning Company");
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
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const storyBody = "Rook Cleaning Company is presented as a real working cleaning company, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Marrow Lead", "role": "Principal / Lead"}, {"name": "Fieldwork Team", "role": "Client experience"}, {"name": "Common Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Cleaning company / Project A", "Cleaning company / Project B", "Cleaning company / Project C", "Cleaning company / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Reliable cleaning with simple scheduling, consistent teams, and clear scope. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#7a46ff";
  return <main className="zp0893" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0893{--bg:#f6f1ff;--fg:#241837;--primary:#7a46ff;--primary-fg:#ffffff;--secondary:#f179c6;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:24px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0893 *{box-sizing:border-box}
.zp0893 a{color:inherit;text-decoration:none}
.zp0893 h1,.zp0893 h2,.zp0893 h3,.zp0893 blockquote{font-family:Arial Narrow, Arial, sans-serif;text-wrap:balance}
.zp0893 img{max-width:100%;display:block}
.zp0893 button,.zp0893 a{-webkit-tap-highlight-color:transparent}
.zp0893 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0893 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0893 .nav strong{font-family:Arial Narrow, Arial, sans-serif;font-size:18px}
.zp0893 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0893 .nav.floating{margin:16px auto;width:min(calc(100% - 32px),var(--max));border:var(--line) solid var(--border);border-radius:999px;background:color-mix(in srgb,var(--bg) 88%,transparent);backdrop-filter:blur(16px);padding:12px 22px}
.zp0893 .mobileMenu{display:none}
.zp0893 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0893 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0893 .eyebrow,.zp0893 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0893 h1{font-size:clamp(48px,6.9vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0893 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0893 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0893 .heroActions a,.zp0893 .schedule>a,.zp0893 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0893 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0893 .visual,.zp0893 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0893 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0893 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(-12deg)}
.zp0893 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0893 .heroPhoto{object-fit:cover}
.zp0893 .floatingHero{grid-template-columns:1.15fr .85fr}
.zp0893 .floatStack{position:relative;min-height:500px}
.zp0893 .floatStack>*{position:absolute}
.zp0893 .floatStack>*:first-child{inset:5% 12% 20% 5%}
.zp0893 .floatStack article{padding:18px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius)}
.zp0893 .floatStack article:nth-of-type(1){right:0;top:8%}
.zp0893 .floatStack article:nth-of-type(2){left:0;bottom:3%}
.zp0893 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0893 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0893 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0893 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0893 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0893 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0893 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0893 .serviceGrid p{color:var(--muted)}
.zp0893 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0893 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0893 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0893 details{border-top:1px solid var(--border);padding:20px 0}
.zp0893 details summary{font-weight:800;cursor:pointer}
.zp0893 details p{color:var(--muted);max-width:70ch}
.zp0893 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0893 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0893 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0893 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0893 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0893 .projects article:nth-child(2){transform:translateY(32px)}
.zp0893 .schedule,.zp0893 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0893 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0893 .contact .eyebrow{color:var(--bg)}
.zp0893 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0893 .contactMeta{display:grid;gap:10px}
.zp0893 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0893{background-image:repeating-linear-gradient(0deg,transparent 0 28px,color-mix(in srgb,var(--fg) 4%,transparent) 29px 30px)}
.zp0893 .section:nth-of-type(3n){transform:rotate(0.35deg)}
.zp0893 .heroCopy{animation:enter-892 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-892{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0893 .hero{min-height:auto}
.zp0893 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0893 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0893 .nav nav{display:none}
.zp0893 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0893 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0893 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0893 .mobileMenu nav a{padding:10px 8px}
.zp0893 .hero,.zp0893 .floatingHero{grid-template-columns:1fr}
.zp0893 .section,.zp0893 .sectionTitle,.zp0893 .location,.zp0893 .contact{grid-template-columns:1fr}
.zp0893 .projects .projectGrid{grid-template-columns:1fr}
.zp0893 .projects article:nth-child(2){transform:none}
.zp0893 .section{display:block}}
@media(max-width:430px){.zp0893{font-size:16px}
.zp0893 .hero,.zp0893 .section,.zp0893 .contact{padding-left:18px;padding-right:18px}
.zp0893 .serviceGrid,.zp0893 .proof{grid-template-columns:1fr}
.zp0893 h1{font-size:clamp(42px,14vw,70px)}}

.zp0893 .heroActions a,.zp0893 .primary,.zp0893 .ctaBtn,.zp0893 .btnPrimary,.zp0893 .schedule>a,.zp0893 .newsletter>a{transition:all .2s ease}
.zp0893 .heroActions a:hover,.zp0893 .primary:hover,.zp0893 .ctaBtn:hover,.zp0893 .btnPrimary:hover{
  opacity:.8
}
.zp0893 nav a,.zp0893 .nav a,.zp0893 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0893 nav a:hover,.zp0893 .nav a:hover,.zp0893 .footer a:hover{
  color:var(--primary)
}
.zp0893 .serviceGrid article,.zp0893 .projectCard,.zp0893 .teamCard,.zp0893 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0893 .serviceGrid article:hover,.zp0893 .projectCard:hover,.zp0893 .teamCard:hover,.zp0893 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0893 *,.zp0893 *::before,.zp0893 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0893 a,.zp0893 button,.zp0893 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav floating"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero floatingHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Send an enquiry</a><a href="#services">Explore</a></div></div><div className="floatStack">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">92</span><div className="visualMark"/><small>{businessName}</small></div>}<article>{services[0]}</article><article>{services[1]}</article></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Send an enquiry</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Paper Texture / gallery-index</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
