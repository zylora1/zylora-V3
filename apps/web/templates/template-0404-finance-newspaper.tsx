import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0404-finance-newspaper", "family": "Newspaper", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "transparent-overlay|product-led|dashboard-story|projects>services>destinations>story>metrics>proof|cut-corners|product-ui", "industry": "finance", "hero": "product-led", "navigation": "transparent-overlay", "layout": "dashboard-story"};

export default function Template0404({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Pavilion Financial Advisory");
  const headline = String(content.headline || "Clear financial decisions built around goals, risk, and the life behind the numbers.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Financial planning", "Investments", "Retirement", "Estate strategy", "Business-owner planning"];
  const industryLabel = "Financial advisory";
  const serviceNotes = ["Whole-of-market mortgage advice covering 90+ lenders, not a panel.", "Protection review included with every mortgage: life, income, and critical illness covered.", "Business lending specialists for commercial mortgages, bridging, and development finance.", "First-time buyer programme with dedicated support from application to keys.", "Annual mortgage review: we check your rate automatically and flag remortgage opportunities."];
  const proofPoints = ["FCA authorised and regulated", "Whole-of-market access", "No broker fee to clients", "95% recommend us"];
  const storyQuote = "\u201cClear financial decisions built around goals, risk, and the life behind the numbers.\u201d";
  const storyBody = "Pavilion Financial Advisory is presented as a real working financial advisory, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "My mortgage application was complex — self-employed, irregular income, quirky property. They found a lender on the first search.";
  const team = [{"name": "Foxglove Lead", "role": "Principal / Lead"}, {"name": "Atlas Team", "role": "Client experience"}, {"name": "Clove Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Financial advisory / Project A", "Financial advisory / Project B", "Financial advisory / Project C", "Financial advisory / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Clear financial decisions built around goals, risk, and the life behind the numbers. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff7a59";
  return <main className="zp0404" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0404{--bg:#0c1020;--fg:#eff2ff;--primary:#ff7a59;--primary-fg:#050505;--secondary:#5ee0c3;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:none;--max:1360px;--space:36px;background:var(--bg);color:var(--fg);font-family:Segoe UI, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0404 *{box-sizing:border-box}
.zp0404 a{color:inherit;text-decoration:none}
.zp0404 h1,.zp0404 h2,.zp0404 h3,.zp0404 blockquote{font-family:Segoe UI, Arial, sans-serif;text-wrap:balance}
.zp0404 img{max-width:100%;display:block}
.zp0404 button,.zp0404 a{-webkit-tap-highlight-color:transparent}
.zp0404 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0404 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0404 .nav strong{font-family:Segoe UI, Arial, sans-serif;font-size:18px}
.zp0404 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0404 .nav.overlay{position:absolute;inset:0 0 auto;background:linear-gradient(180deg,color-mix(in srgb,var(--bg) 76%,transparent),transparent);border:0}
.zp0404 .mobileMenu{display:none}
.zp0404 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0404 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0404 .eyebrow,.zp0404 .sectionTitle>span,.zp0404 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0404 h1{font-size:clamp(48px,7.45vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0404 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0404 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0404 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0404 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0404 .visual,.zp0404 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0404 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0404 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:2px;right:-8%;top:-18%;transform:rotate(12deg)}
.zp0404 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0404 .heroPhoto{object-fit:cover}
.zp0404 .productLedHero{grid-template-columns:1.1fr .9fr}
.zp0404 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0404 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0404 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0404 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0404 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0404 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0404 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0404 .serviceGrid p{color:var(--muted)}
.zp0404 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0404 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0404 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0404 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0404 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0404 .story p{color:var(--muted)}
.zp0404 details{border-top:1px solid var(--border);padding:20px 0}
.zp0404 details summary{font-weight:800;cursor:pointer}
.zp0404 details p{color:var(--muted);max-width:70ch}
.zp0404 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0404 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0404 .projects article:nth-child(2){transform:translateY(32px)}
.zp0404 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0404 .metrics div{background:var(--bg);padding:30px}
.zp0404 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Segoe UI, Arial, sans-serif;color:var(--primary)}
.zp0404 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0404 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0404 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0404 .contact .eyebrow{color:var(--bg)}
.zp0404 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0404 .contactMeta{display:grid;gap:10px}
.zp0404 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0404{background-image:repeating-linear-gradient(0deg,transparent 0 28px,color-mix(in srgb,var(--fg) 4%,transparent) 29px 30px)}
.zp0404 .section:nth-of-type(3n){transform:rotate(-0.35deg)}
.zp0404 .heroCopy p,.zp0404 .story p{columns:2;column-gap:30px}
.zp0404 .heroCopy{animation:enter-403 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-403{from{opacity:0;transform:translateY(21px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0404 .hero{min-height:auto}
.zp0404 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0404 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0404 .nav nav{display:none}
.zp0404 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0404 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0404 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0404 .mobileMenu nav a{padding:10px 8px}
.zp0404 .hero,.zp0404 .productLedHero{grid-template-columns:1fr}
.zp0404 .section,.zp0404 .sectionTitle,.zp0404 .story,.zp0404 .contact{grid-template-columns:1fr}
.zp0404 .metrics{grid-template-columns:1fr 1fr}
.zp0404 .projects .projectGrid{grid-template-columns:1fr}
.zp0404 .projects article:nth-child(2){transform:none}
.zp0404 .section{display:block}}
@media(max-width:430px){.zp0404{font-size:16px}
.zp0404 .hero,.zp0404 .section,.zp0404 .contact{padding-left:18px;padding-right:18px}
.zp0404 .serviceGrid,.zp0404 .proof,.zp0404 .metrics,.zp0404 .destinations>div:last-child{grid-template-columns:1fr}
.zp0404 h1{font-size:clamp(42px,14vw,70px)}}

.zp0404 .heroActions a,.zp0404 .primary,.zp0404 .ctaBtn,.zp0404 .btnPrimary,.zp0404 .schedule>a,.zp0404 .newsletter>a{transition:all .2s ease}
.zp0404 .heroActions a:hover,.zp0404 .primary:hover,.zp0404 .ctaBtn:hover,.zp0404 .btnPrimary:hover{
  text-decoration:underline;opacity:.85
}
.zp0404 nav a,.zp0404 .nav a,.zp0404 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0404 nav a:hover,.zp0404 .nav a:hover,.zp0404 .footer a:hover{
  text-decoration:underline
}
.zp0404 .serviceGrid article,.zp0404 .projectCard,.zp0404 .teamCard,.zp0404 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0404 .serviceGrid article:hover,.zp0404 .projectCard:hover,.zp0404 .teamCard:hover,.zp0404 .bentoCard:hover{
  border-color:var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0404 *,.zp0404 *::before,.zp0404 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0404 a,.zp0404 button,.zp0404 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav overlay"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero productLedHero">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">03</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="productTitle"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a quote</a><a href="#services">Explore</a></div></div></div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a quote</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Newspaper / dashboard-story</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
