import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0987-food-brand-conceptual-sketch", "family": "Conceptual Sketch", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "statement-bar|horizontal-strip|product-journey|hours>services>proof>products>awards>security>research|capsule|poster", "industry": "food-brand", "hero": "horizontal-strip", "navigation": "statement-bar", "layout": "product-journey"};

export default function Template0987({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Atlas Food Brand");
  const headline = String(content.headline || "A food brand built around distinctive flavour, clear provenance, and easy discovery.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Products", "Recipes", "Stockists", "Wholesale", "Story"];
  const industryLabel = "Food brand";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Tandem Lead", "role": "Principal / Lead"}, {"name": "Morrow Team", "role": "Client experience"}, {"name": "Cedar Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Food brand / Project A", "Food brand / Project B", "Food brand / Project C", "Food brand / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "A food brand built around distinctive flavour, clear provenance, and easy discovery. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#00b4d8";
  return <main className="zp0987" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0987{--bg:#0d1723;--fg:#eef6ff;--primary:#00b4d8;--primary-fg:#050505;--secondary:#90e0ef;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:32px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:32px;background:var(--bg);color:var(--fg);font-family:Helvetica Neue, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0987 *{box-sizing:border-box}
.zp0987 a{color:inherit;text-decoration:none}
.zp0987 h1,.zp0987 h2,.zp0987 h3,.zp0987 blockquote{font-family:Impact, Arial Black, sans-serif;text-wrap:balance}
.zp0987 img{max-width:100%;display:block}
.zp0987 button,.zp0987 a{-webkit-tap-highlight-color:transparent}
.zp0987 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0987 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0987 .nav strong{font-family:Impact, Arial Black, sans-serif;font-size:18px}
.zp0987 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0987 .nav.statement{display:grid;grid-template-columns:1fr auto 1fr}
.zp0987 .nav.statement>a{justify-self:end}
.zp0987 .mobileMenu{display:none}
.zp0987 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0987 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0987 .eyebrow,.zp0987 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0987 h1{font-size:clamp(48px,6.35vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0987 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0987 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0987 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0987 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0987 .visual,.zp0987 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0987 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0987 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:32px;right:-8%;top:-18%;transform:rotate(4deg)}
.zp0987 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0987 .heroPhoto{object-fit:cover}
.zp0987 .stripHero{grid-template-columns:1.2fr .8fr;overflow:hidden}
.zp0987 .stripWord{position:absolute;left:0;top:12px;white-space:nowrap;font:900 clamp(40px,8vw,120px)/1 Impact, Arial Black, sans-serif;opacity:.08}
.zp0987 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0987 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0987 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0987 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0987 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0987 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0987 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0987 .serviceGrid p{color:var(--muted)}
.zp0987 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0987 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0987 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0987 details{border-top:1px solid var(--border);padding:20px 0}
.zp0987 details summary{font-weight:800;cursor:pointer}
.zp0987 details p{color:var(--muted);max-width:70ch}
.zp0987 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0987 .hours dl{margin:0}
.zp0987 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0987 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0987 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0987 .p1,.zp0987 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0987 .awards>div{max-width:800px;margin-left:auto}
.zp0987 .awards p,.zp0987 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0987 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0987 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0987 .researchRows{max-width:900px;margin-left:auto}
.zp0987 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0987 .contact .eyebrow{color:var(--bg)}
.zp0987 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0987 .contactMeta{display:grid;gap:10px}
.zp0987 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0987 .heroCopy{animation:enter-986 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-986{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0987 .hero{min-height:auto}
.zp0987 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0987 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0987 .nav nav{display:none}
.zp0987 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0987 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0987 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0987 .mobileMenu nav a{padding:10px 8px}
.zp0987 .hero,.zp0987 .stripHero{grid-template-columns:1fr}
.zp0987 .section,.zp0987 .sectionTitle,.zp0987 .hours,.zp0987 .security,.zp0987 .contact{grid-template-columns:1fr}
.zp0987 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0987 .section{display:block}}
@media(max-width:430px){.zp0987{font-size:16px}
.zp0987 .hero,.zp0987 .section,.zp0987 .contact{padding-left:18px;padding-right:18px}
.zp0987 .serviceGrid,.zp0987 .proof,.zp0987 .collectionGrid{grid-template-columns:1fr}
.zp0987 h1{font-size:clamp(42px,14vw,70px)}
.zp0987 .nav.statement{grid-template-columns:1fr auto}
.zp0987 .nav.statement>span:first-child{display:none}}

.zp0987 .heroActions a,.zp0987 .primary,.zp0987 .ctaBtn,.zp0987 .btnPrimary,.zp0987 .schedule>a,.zp0987 .newsletter>a{transition:all .2s ease}
.zp0987 .heroActions a:hover,.zp0987 .primary:hover,.zp0987 .ctaBtn:hover,.zp0987 .btnPrimary:hover{
  opacity:.8
}
.zp0987 nav a,.zp0987 .nav a,.zp0987 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0987 nav a:hover,.zp0987 .nav a:hover,.zp0987 .footer a:hover{
  opacity:.7
}
.zp0987 .serviceGrid article,.zp0987 .projectCard,.zp0987 .teamCard,.zp0987 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0987 .serviceGrid article:hover,.zp0987 .projectCard:hover,.zp0987 .teamCard:hover,.zp0987 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0987 *,.zp0987 *::before,.zp0987 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0987 a,.zp0987 button,.zp0987 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav statement"><span>Independent / Local / Established</span><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero stripHero"><div className="stripWord">{businessName} — {businessName}</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Join the community</a><a href="#services">Explore</a></div></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">86</span><div className="visualMark"/><small>{businessName}</small></div>}</section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Join the community</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Conceptual Sketch / product-journey</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
