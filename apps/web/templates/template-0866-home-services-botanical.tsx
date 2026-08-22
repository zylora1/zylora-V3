import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0866-home-services-botanical", "family": "Botanical", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "tabbed|layered-photography|full-bleed-chapters|schedule>proof>services>comparison>credentials>story|borderless|modernist-duo", "industry": "home-services", "hero": "layered-photography", "navigation": "tabbed", "layout": "full-bleed-chapters"};

export default function Template0866({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Morrow Home Services Company");
  const headline = String(content.headline || "Trusted local trades with transparent arrival windows and straightforward estimates.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Electrical", "Plumbing", "Heating", "Emergency callouts", "Maintenance plans"];
  const industryLabel = "Home services company";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const storyQuote = "\u201cTrusted local trades with transparent arrival windows and straightforward estimates.\u201d";
  const storyBody = "Morrow Home Services Company is presented as a real working home services company, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Aster Lead", "role": "Principal / Lead"}, {"name": "Vale Team", "role": "Client experience"}, {"name": "Civic Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Home services company / Project A", "Home services company / Project B", "Home services company / Project C", "Home services company / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Trusted local trades with transparent arrival windows and straightforward estimates. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e55f4b";
  return <main className="zp0866" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0866{--bg:#eaf4f8;--fg:#0f2b36;--primary:#e55f4b;--primary-fg:#050505;--secondary:#2788a8;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:28px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0866 *{box-sizing:border-box}
.zp0866 a{color:inherit;text-decoration:none}
.zp0866 h1,.zp0866 h2,.zp0866 h3,.zp0866 blockquote{font-family:Futura, Avenir, Arial, sans-serif;text-wrap:balance}
.zp0866 img{max-width:100%;display:block}
.zp0866 button,.zp0866 a{-webkit-tap-highlight-color:transparent}
.zp0866 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0866 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0866 .nav strong{font-family:Futura, Avenir, Arial, sans-serif;font-size:18px}
.zp0866 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0866 .mobileMenu{display:none}
.zp0866 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0866 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0866 .eyebrow,.zp0866 .sectionTitle>span,.zp0866 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0866 h1{font-size:clamp(48px,5.8vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0866 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0866 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0866 .heroActions a,.zp0866 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0866 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0866 .visual,.zp0866 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0866 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0866 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(-12deg)}
.zp0866 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0866 .heroPhoto{object-fit:cover}
.zp0866 .layeredHero{grid-template-columns:0.85fr 1.15fr}
.zp0866 .layered{position:relative;padding:8%}
.zp0866 .layerCard{position:absolute;right:0;bottom:3%;background:var(--primary);color:var(--primary-fg);padding:22px;transform:rotate(-4deg)}
.zp0866 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0866 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0866 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0866 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0866 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0866 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0866 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0866 .serviceGrid p{color:var(--muted)}
.zp0866 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0866 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0866 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0866 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0866 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0866 .story p{color:var(--muted)}
.zp0866 details{border-top:1px solid var(--border);padding:20px 0}
.zp0866 details summary{font-weight:800;cursor:pointer}
.zp0866 details p{color:var(--muted);max-width:70ch}
.zp0866 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0866 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0866 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0866 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0866 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0866 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0866 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0866 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0866 .contact .eyebrow{color:var(--bg)}
.zp0866 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0866 .contactMeta{display:grid;gap:10px}
.zp0866 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0866 .section:nth-of-type(even){margin:0 2vw;background:var(--surface)}
.zp0866 .heroCopy{animation:enter-865 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-865{from{opacity:0;transform:translateY(23px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0866 .hero{min-height:auto}
.zp0866 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0866 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0866 .nav nav{display:none}
.zp0866 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0866 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0866 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0866 .mobileMenu nav a{padding:10px 8px}
.zp0866 .hero,.zp0866 .layeredHero{grid-template-columns:1fr}
.zp0866 .section,.zp0866 .sectionTitle,.zp0866 .story,.zp0866 .contact{grid-template-columns:1fr}
.zp0866 .section{display:block}}
@media(max-width:430px){.zp0866{font-size:16px}
.zp0866 .hero,.zp0866 .section,.zp0866 .contact{padding-left:18px;padding-right:18px}
.zp0866 .serviceGrid,.zp0866 .proof,.zp0866 .compareGrid{grid-template-columns:1fr}
.zp0866 h1{font-size:clamp(42px,14vw,70px)}}

.zp0866 .heroActions a,.zp0866 .primary,.zp0866 .ctaBtn,.zp0866 .btnPrimary,.zp0866 .schedule>a,.zp0866 .newsletter>a{transition:all .2s ease}
.zp0866 .heroActions a:hover,.zp0866 .primary:hover,.zp0866 .ctaBtn:hover,.zp0866 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0866 nav a,.zp0866 .nav a,.zp0866 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0866 nav a:hover,.zp0866 .nav a:hover,.zp0866 .footer a:hover{
  color:var(--primary)
}
.zp0866 .serviceGrid article,.zp0866 .projectCard,.zp0866 .teamCard,.zp0866 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0866 .serviceGrid article:hover,.zp0866 .projectCard:hover,.zp0866 .teamCard:hover,.zp0866 .bentoCard:hover{
  transform:translateY(-3px)
}
@media(prefers-reduced-motion:reduce){.zp0866 *,.zp0866 *::before,.zp0866 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0866 a,.zp0866 button,.zp0866 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav tabs"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero layeredHero"><div className="layered">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">65</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="layerCard">{businessName}</div></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a quote</a><a href="#services">Explore</a></div></div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a quote</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Botanical / full-bleed-chapters</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
