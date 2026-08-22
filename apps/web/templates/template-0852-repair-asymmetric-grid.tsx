import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0852-repair-asymmetric-grid", "family": "Asymmetric Grid", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "transparent-overlay|product-led|property-led|awards>collection>manifesto>research>services>story>proof|cut-corners|literary", "industry": "repair", "hero": "product-led", "navigation": "transparent-overlay", "layout": "property-led"};

export default function Template0852({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Pavilion Repair Service");
  const headline = String(content.headline || "Clear estimates, reliable workmanship, and updates you can understand.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Diagnostics", "Routine service", "Repairs", "Tyres", "Inspections"];
  const industryLabel = "Repair service";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const storyQuote = "\u201cClear estimates, reliable workmanship, and updates you can understand.\u201d";
  const storyBody = "Pavilion Repair Service is presented as a real working repair service, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Foxglove Lead", "role": "Principal / Lead"}, {"name": "Atlas Team", "role": "Client experience"}, {"name": "Clove Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Repair service / Project A", "Repair service / Project B", "Repair service / Project C", "Repair service / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Clear estimates, reliable workmanship, and updates you can understand. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff3b30";
  return <main className="zp0852" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0852{--bg:#f7f7f7;--fg:#101010;--primary:#ff3b30;--primary-fg:#050505;--secondary:#2222aa;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:36px;background:var(--bg);color:var(--fg);font-family:Helvetica Neue, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0852 *{box-sizing:border-box}
.zp0852 a{color:inherit;text-decoration:none}
.zp0852 h1,.zp0852 h2,.zp0852 h3,.zp0852 blockquote{font-family:Garamond, Georgia, serif;text-wrap:balance}
.zp0852 img{max-width:100%;display:block}
.zp0852 button,.zp0852 a{-webkit-tap-highlight-color:transparent}
.zp0852 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0852 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0852 .nav strong{font-family:Garamond, Georgia, serif;font-size:18px}
.zp0852 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0852 .nav.overlay{position:absolute;inset:0 0 auto;background:linear-gradient(180deg,color-mix(in srgb,var(--bg) 76%,transparent),transparent);border:0}
.zp0852 .mobileMenu{display:none}
.zp0852 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0852 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0852 .eyebrow,.zp0852 .sectionTitle>span,.zp0852 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0852 h1{font-size:clamp(48px,6.35vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0852 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0852 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0852 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0852 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0852 .visual,.zp0852 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0852 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0852 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:2px;right:-8%;top:-18%;transform:rotate(4deg)}
.zp0852 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0852 .heroPhoto{object-fit:cover}
.zp0852 .productLedHero{grid-template-columns:1.1fr .9fr}
.zp0852 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0852 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0852 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0852 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0852 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0852 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0852 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0852 .serviceGrid p{color:var(--muted)}
.zp0852 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0852 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0852 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0852 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0852 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0852 .story p{color:var(--muted)}
.zp0852 details{border-top:1px solid var(--border);padding:20px 0}
.zp0852 details summary{font-weight:800;cursor:pointer}
.zp0852 details p{color:var(--muted);max-width:70ch}
.zp0852 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0852 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0852 .p1,.zp0852 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0852 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Garamond, Georgia, serif;letter-spacing:-.04em;max-width:17ch}
.zp0852 .awards>div{max-width:800px;margin-left:auto}
.zp0852 .awards p,.zp0852 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0852 .researchRows{max-width:900px;margin-left:auto}
.zp0852 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0852 .contact .eyebrow{color:var(--bg)}
.zp0852 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0852 .contactMeta{display:grid;gap:10px}
.zp0852 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0852 .heroCopy{animation:enter-851 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-851{from{opacity:0;transform:translateY(29px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0852 .hero{min-height:auto}
.zp0852 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0852 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0852 .nav nav{display:none}
.zp0852 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0852 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0852 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0852 .mobileMenu nav a{padding:10px 8px}
.zp0852 .hero,.zp0852 .productLedHero{grid-template-columns:1fr}
.zp0852 .section,.zp0852 .sectionTitle,.zp0852 .story,.zp0852 .contact{grid-template-columns:1fr}
.zp0852 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0852 .section{display:block}}
@media(max-width:430px){.zp0852{font-size:16px}
.zp0852 .hero,.zp0852 .section,.zp0852 .contact{padding-left:18px;padding-right:18px}
.zp0852 .serviceGrid,.zp0852 .proof,.zp0852 .collectionGrid{grid-template-columns:1fr}
.zp0852 h1{font-size:clamp(42px,14vw,70px)}}

.zp0852 .heroActions a,.zp0852 .primary,.zp0852 .ctaBtn,.zp0852 .btnPrimary,.zp0852 .schedule>a,.zp0852 .newsletter>a{transition:all .2s ease}
.zp0852 .heroActions a:hover,.zp0852 .primary:hover,.zp0852 .ctaBtn:hover,.zp0852 .btnPrimary:hover{
  opacity:.85
}
.zp0852 nav a,.zp0852 .nav a,.zp0852 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0852 nav a:hover,.zp0852 .nav a:hover,.zp0852 .footer a:hover{
  color:var(--primary)
}
.zp0852 .serviceGrid article,.zp0852 .projectCard,.zp0852 .teamCard,.zp0852 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0852 .serviceGrid article:hover,.zp0852 .projectCard:hover,.zp0852 .teamCard:hover,.zp0852 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0852 *,.zp0852 *::before,.zp0852 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0852 a,.zp0852 button,.zp0852 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav overlay"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero productLedHero">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">51</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="productTitle"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a quote</a><a href="#services">Explore</a></div></div></div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a quote</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Asymmetric Grid / property-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
