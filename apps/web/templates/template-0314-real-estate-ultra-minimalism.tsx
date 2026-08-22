import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0314-real-estate-ultra-minimalism", "family": "Ultra Minimalism", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "left-sidebar|product-demo|menu-led|services>availability>newsletter>case-study>awards>proof|paper-sheet|modernist-duo", "industry": "real-estate", "hero": "product-demo", "navigation": "left-sidebar", "layout": "menu-led"};

export default function Template0314({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Kindred Real Estate Agency");
  const headline = String(content.headline || "Local market knowledge, sharp presentation, and straightforward advice through every move.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Residential sales", "Buyer representation", "Rentals", "Market appraisals", "Relocation"];
  const industryLabel = "Real estate agency";
  const serviceNotes = ["Market appraisal within 48 hours — accurate figures, not inflated ones to win instructions.", "Professional photography, floor plans, and videography included in our standard package.", "Accompanied viewings managed by someone who knows the property, not a junior.", "Negotiation management with weekly updates on where every offer stands.", "Completion support including solicitor liaison, survey coordination, and move-in day contact."];
  const proofPoints = ["NAEA Propertymark member", "0% sale fall-through rate", "Average sale: 98.2% of asking", "Fully managed lettings"];
  const testimonial = "They sold our house in 11 days at full asking price. The communication was clear throughout — no chasing required.";
  const team = [{"name": "Rook Lead", "role": "Principal / Lead"}, {"name": "Northline Team", "role": "Client experience"}, {"name": "Aster Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Real estate agency / Project A", "Real estate agency / Project B", "Real estate agency / Project C", "Real estate agency / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Local market knowledge, sharp presentation, and straightforward advice through every move. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#81946f";
  return <main className="zp0314" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0314{--bg:#f4eee5;--fg:#302821;--primary:#81946f;--primary-fg:#050505;--secondary:#c55d4d;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:3px;--line:0px;--shadow:none;--max:1360px;--space:28px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0314 *{box-sizing:border-box}
.zp0314 a{color:inherit;text-decoration:none}
.zp0314 h1,.zp0314 h2,.zp0314 h3,.zp0314 blockquote{font-family:Futura, Avenir, Arial, sans-serif;text-wrap:balance}
.zp0314 img{max-width:100%;display:block}
.zp0314 button,.zp0314 a{-webkit-tap-highlight-color:transparent}
.zp0314 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0314 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0314 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0314 .mobileMenu{display:none}
.zp0314:has(.navRail)>.hero,.zp0314:has(.navRail)>.section,.zp0314:has(.navRail)>.contact,.zp0314:has(.navRail)>.footer{margin-left:190px}
.zp0314 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0314 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0314 .eyebrow,.zp0314 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0314 h1{font-size:clamp(48px,7.45vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0314 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0314 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0314 .heroActions a,.zp0314 .schedule>a,.zp0314 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0314 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0314 .visual,.zp0314 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0314 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0314 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:3px;right:-8%;top:-18%;transform:rotate(12deg)}
.zp0314 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0314 .heroPhoto{object-fit:cover}
.zp0314 .productHero{grid-template-columns:0.85fr 1.15fr}
.zp0314 .productFrame{padding:14px;border:var(--line) solid var(--border);border-radius:calc(var(--radius) + 8px);background:var(--surface)}
.zp0314 .productBar{height:24px;border-bottom:1px solid var(--border);margin-bottom:14px}
.zp0314 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0314 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0314 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0314 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0314 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0314 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0314 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0314 .serviceGrid p{color:var(--muted)}
.zp0314 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0314 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0314 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0314 details{border-top:1px solid var(--border);padding:20px 0}
.zp0314 details summary{font-weight:800;cursor:pointer}
.zp0314 details p{color:var(--muted);max-width:70ch}
.zp0314 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0314 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0314 .projects article:nth-child(2){transform:translateY(32px)}
.zp0314 .schedule,.zp0314 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0314 .awards>div{max-width:800px;margin-left:auto}
.zp0314 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0314 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0314 .contact .eyebrow{color:var(--bg)}
.zp0314 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0314 .contactMeta{display:grid;gap:10px}
.zp0314 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@media(max-width:1024px){.zp0314 .hero{min-height:auto}
.zp0314 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0314 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0314 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0314 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0314 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0314 .mobileMenu nav a{padding:10px 8px}
.zp0314 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0314:has(.navRail)>.hero,.zp0314:has(.navRail)>.section,.zp0314:has(.navRail)>.contact,.zp0314:has(.navRail)>.footer{margin-left:0}
.zp0314 .hero,.zp0314 .productHero{grid-template-columns:1fr}
.zp0314 .section,.zp0314 .sectionTitle,.zp0314 .contact{grid-template-columns:1fr}
.zp0314 .projects .projectGrid{grid-template-columns:1fr}
.zp0314 .projects article:nth-child(2){transform:none}
.zp0314 .section{display:block}}
@media(max-width:430px){.zp0314{font-size:16px}
.zp0314 .hero,.zp0314 .section,.zp0314 .contact{padding-left:18px;padding-right:18px}
.zp0314 .serviceGrid,.zp0314 .proof{grid-template-columns:1fr}
.zp0314 h1{font-size:clamp(42px,14vw,70px)}}

.zp0314 .heroActions a,.zp0314 .primary,.zp0314 .ctaBtn,.zp0314 .btnPrimary,.zp0314 .schedule>a,.zp0314 .newsletter>a{transition:all .2s ease}
.zp0314 .heroActions a:hover,.zp0314 .primary:hover,.zp0314 .ctaBtn:hover,.zp0314 .btnPrimary:hover{
  opacity:.75
}
.zp0314 nav a,.zp0314 .nav a,.zp0314 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0314 nav a:hover,.zp0314 .nav a:hover,.zp0314 .footer a:hover{
  opacity:.6
}
.zp0314 .serviceGrid article,.zp0314 .projectCard,.zp0314 .teamCard,.zp0314 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0314 .serviceGrid article:hover,.zp0314 .projectCard:hover,.zp0314 .teamCard:hover,.zp0314 .bentoCard:hover{
  opacity:.9
}
@keyframes zpEnter{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
.zp0314 .heroCopy{animation:zpEnter .7s cubic-bezier(.2,.8,.2,1) both}
.zp0314 .sectionTitle,.zp0314 .section>h2{animation:zpEnter .6s cubic-bezier(.2,.8,.2,1) .1s both}
@media(prefers-reduced-motion:reduce){.zp0314 *,.zp0314 *::before,.zp0314 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0314 a,.zp0314 button,.zp0314 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero productHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Plan your visit</a><a href="#services">Explore</a></div></div><div className="productFrame"><div className="productBar"/>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">13</span><div className="visualMark"/><small>{businessName}</small></div>}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Plan your visit</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Ultra Minimalism / menu-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
