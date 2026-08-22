import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0318-real-estate-friendly-local-business", "family": "Friendly Local Business", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "asymmetric-cluster|circular-focus|portfolio-sequence|hours>menu>gallery>integrations>manifesto>services>proof|circular|neo-grotesk", "industry": "real-estate", "hero": "circular-focus", "navigation": "asymmetric-cluster", "layout": "portfolio-sequence"};

export default function Template0318({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Tandem Real Estate Agency");
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
  const team = [{"name": "Northline Lead", "role": "Principal / Lead"}, {"name": "Aster Team", "role": "Client experience"}, {"name": "Vale Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Real estate agency / Project A", "Real estate agency / Project B", "Real estate agency / Project C", "Real estate agency / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Local market knowledge, sharp presentation, and straightforward advice through every move. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff5449";
  return <main className="zp0318" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0318{--bg:#18090c;--fg:#fff3f1;--primary:#ff5449;--primary-fg:#050505;--secondary:#f6c65b;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:999px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:28px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0318 *{box-sizing:border-box}
.zp0318 a{color:inherit;text-decoration:none}
.zp0318 h1,.zp0318 h2,.zp0318 h3,.zp0318 blockquote{font-family:Helvetica Neue, Arial, sans-serif;text-wrap:balance}
.zp0318 img{max-width:100%;display:block}
.zp0318 button,.zp0318 a{-webkit-tap-highlight-color:transparent}
.zp0318 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0318 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0318 .nav strong{font-family:Helvetica Neue, Arial, sans-serif;font-size:18px}
.zp0318 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0318 .nav.cluster{align-items:flex-end}
.zp0318 .mobileMenu{display:none}
.zp0318 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0318 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0318 .eyebrow,.zp0318 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0318 h1{font-size:clamp(48px,6.9vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0318 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0318 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0318 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0318 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0318 .visual,.zp0318 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0318 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0318 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:50%;right:-8%;top:-18%;transform:rotate(-8deg)}
.zp0318 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0318 .heroPhoto{object-fit:cover}
.zp0318 .circleHero{grid-template-columns:0.85fr 1.15fr}
.zp0318 .circleHero{grid-template-columns:1fr 1fr}
.zp0318 .circleFrame{aspect-ratio:1;border-radius:50%;overflow:hidden;border:1px solid var(--border)}
.zp0318 .circleFrame>*{height:100%;border-radius:50%}
.zp0318 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0318 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0318 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0318 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0318 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0318 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0318 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0318 .serviceGrid p{color:var(--muted)}
.zp0318 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0318 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0318 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0318 details{border-top:1px solid var(--border);padding:20px 0}
.zp0318 details summary{font-weight:800;cursor:pointer}
.zp0318 details p{color:var(--muted);max-width:70ch}
.zp0318 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0318 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0318 .galleryGrid>*:first-child{grid-row:1/3}
.zp0318 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0318 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0318 .g2,.zp0318 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0318 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0318 .hours dl{margin:0}
.zp0318 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0318 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0318 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0318 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0318 .menuSection>div:last-child p{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0318 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Helvetica Neue, Arial, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0318 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0318 .contact .eyebrow{color:var(--bg)}
.zp0318 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0318 .contactMeta{display:grid;gap:10px}
.zp0318 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0318 .heroCopy{animation:enter-317 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-317{from{opacity:0;transform:translateY(35px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0318 .hero{min-height:auto}
.zp0318 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0318 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0318 .nav nav{display:none}
.zp0318 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0318 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0318 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0318 .mobileMenu nav a{padding:10px 8px}
.zp0318 .hero,.zp0318 .circleHero{grid-template-columns:1fr}
.zp0318 .section,.zp0318 .sectionTitle,.zp0318 .hours,.zp0318 .contact{grid-template-columns:1fr}
.zp0318 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0318 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0318 .section{display:block}}
@media(max-width:430px){.zp0318{font-size:16px}
.zp0318 .hero,.zp0318 .section,.zp0318 .contact{padding-left:18px;padding-right:18px}
.zp0318 .serviceGrid,.zp0318 .proof{grid-template-columns:1fr}
.zp0318 h1{font-size:clamp(42px,14vw,70px)}
.zp0318 .galleryGrid{grid-template-columns:1fr}
.zp0318 .galleryGrid>*:first-child{grid-column:auto}}

.zp0318 .heroActions a,.zp0318 .primary,.zp0318 .ctaBtn,.zp0318 .btnPrimary,.zp0318 .schedule>a,.zp0318 .newsletter>a{transition:all .2s ease}
.zp0318 .heroActions a:hover,.zp0318 .primary:hover,.zp0318 .ctaBtn:hover,.zp0318 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0318 nav a,.zp0318 .nav a,.zp0318 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0318 nav a:hover,.zp0318 .nav a:hover,.zp0318 .footer a:hover{
  color:var(--primary)
}
.zp0318 .serviceGrid article,.zp0318 .projectCard,.zp0318 .teamCard,.zp0318 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0318 .serviceGrid article:hover,.zp0318 .projectCard:hover,.zp0318 .teamCard:hover,.zp0318 .bentoCard:hover{
  transform:translateY(-3px);box-shadow:0 8px 20px rgba(0,0,0,.1)
}
@media(prefers-reduced-motion:reduce){.zp0318 *,.zp0318 *::before,.zp0318 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0318 a,.zp0318 button,.zp0318 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav cluster"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav><span>Est. 2026</span></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero circleHero"><div className="circleFrame">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">17</span><div className="visualMark"/><small>{businessName}</small></div>}</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">View selected work</a><a href="#services">Explore</a></div></div></section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section menuSection"><div className="sectionTitle"><span>Selection</span><h2>Current favourites.</h2></div><div>{services.map((s,i)=><p key={s}><span>{s}</span><b>{i%2?"Seasonal":"Signature"}</b></p>)}</div></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>View selected work</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Friendly Local Business / portfolio-sequence</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
