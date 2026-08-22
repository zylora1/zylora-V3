import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0305-real-estate-minimalism", "family": "Minimalism", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "classic-horizontal|magazine-cover|case-study-led|comparison>products>process>proof>credentials>services|square-editorial|friendly", "industry": "real-estate", "hero": "magazine-cover", "navigation": "classic-horizontal", "layout": "case-study-led"};

export default function Template0305({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Oak & Tide Real Estate Agency");
  const headline = String(content.headline || "Local market knowledge, sharp presentation, and straightforward advice through every move.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Residential sales", "Buyer representation", "Rentals", "Market appraisals", "Relocation"];
  const serviceNotes = ["Market appraisal within 48 hours — accurate figures, not inflated ones to win instructions.", "Professional photography, floor plans, and videography included in our standard package.", "Accompanied viewings managed by someone who knows the property, not a junior.", "Negotiation management with weekly updates on where every offer stands.", "Completion support including solicitor liaison, survey coordination, and move-in day contact."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["NAEA Propertymark member", "0% sale fall-through rate", "Average sale: 98.2% of asking", "Fully managed lettings"];
  const testimonial = "They sold our house in 11 days at full asking price. The communication was clear throughout — no chasing required.";
  const team = [{"name": "Pavilion Lead", "role": "Principal / Lead"}, {"name": "Bureau Team", "role": "Client experience"}, {"name": "Elm Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Real estate agency / Project A", "Real estate agency / Project B", "Real estate agency / Project C", "Real estate agency / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Local market knowledge, sharp presentation, and straightforward advice through every move. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#53e1d9";
  return <main className="zp0305" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0305{--bg:#0e0e16;--fg:#f5f6ff;--primary:#53e1d9;--primary-fg:#050505;--secondary:#ff5a8a;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:0px;--shadow:none;--max:1440px;--space:24px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0305 *{box-sizing:border-box}
.zp0305 a{color:inherit;text-decoration:none}
.zp0305 h1,.zp0305 h2,.zp0305 h3,.zp0305 blockquote{font-family:Trebuchet MS, Arial, sans-serif;text-wrap:balance}
.zp0305 img{max-width:100%;display:block}
.zp0305 button,.zp0305 a{-webkit-tap-highlight-color:transparent}
.zp0305 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0305 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0305 .nav strong{font-family:Trebuchet MS, Arial, sans-serif;font-size:18px}
.zp0305 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0305 .mobileMenu{display:none}
.zp0305 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0305 .eyebrow,.zp0305 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0305 h1{font-size:clamp(48px,8.0vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0305 .visual,.zp0305 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0305 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0305 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(12deg)}
.zp0305 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0305 .heroPhoto{object-fit:cover}
.zp0305 .coverHero{grid-template-columns:.12fr 1.05fr .83fr;align-items:end}
.zp0305 .coverHero>h1{writing-mode:vertical-rl;transform:rotate(180deg);font-size:clamp(50px,8vw,130px);max-width:none}
.zp0305 .coverCaption{align-self:end}
.zp0305 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0305 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0305 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0305 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0305 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0305 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0305 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0305 .serviceGrid p{color:var(--muted)}
.zp0305 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0305 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0305 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0305 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0305 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0305 details{border-top:1px solid var(--border);padding:20px 0}
.zp0305 details summary{font-weight:800;cursor:pointer}
.zp0305 details p{color:var(--muted);max-width:70ch}
.zp0305 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0305 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0305 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0305 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0305 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0305 .p1,.zp0305 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0305 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0305 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0305 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0305 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0305 .contact .eyebrow{color:var(--bg)}
.zp0305 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0305 .contactMeta{display:grid;gap:10px}
.zp0305 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-304{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0305 .hero{min-height:auto}
.zp0305 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0305 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0305 .nav nav{display:none}
.zp0305 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0305 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0305 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0305 .mobileMenu nav a{padding:10px 8px}
.zp0305 .hero,.zp0305 .coverHero{grid-template-columns:1fr}
.zp0305 .section,.zp0305 .sectionTitle,.zp0305 .contact{grid-template-columns:1fr}
.zp0305 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0305 .section{display:block}}
@media(max-width:430px){.zp0305{font-size:16px}
.zp0305 .hero,.zp0305 .section,.zp0305 .contact{padding-left:18px;padding-right:18px}
.zp0305 .serviceGrid,.zp0305 .proof,.zp0305 .collectionGrid,.zp0305 .compareGrid{grid-template-columns:1fr}
.zp0305 h1{font-size:clamp(42px,14vw,70px)}}

.zp0305 .heroActions a,.zp0305 .primary,.zp0305 .ctaBtn,.zp0305 .btnPrimary,.zp0305 .schedule>a,.zp0305 .newsletter>a{transition:all .2s ease}
.zp0305 .heroActions a:hover,.zp0305 .primary:hover,.zp0305 .ctaBtn:hover,.zp0305 .btnPrimary:hover{
  opacity:.75
}
.zp0305 nav a,.zp0305 .nav a,.zp0305 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0305 nav a:hover,.zp0305 .nav a:hover,.zp0305 .footer a:hover{
  opacity:.6
}
.zp0305 .serviceGrid article,.zp0305 .projectCard,.zp0305 .teamCard,.zp0305 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0305 .serviceGrid article:hover,.zp0305 .projectCard:hover,.zp0305 .teamCard:hover,.zp0305 .bentoCard:hover{
  opacity:.9
}
@media(prefers-reduced-motion:reduce){.zp0305 *,.zp0305 *::before,.zp0305 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0305 a,.zp0305 button,.zp0305 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero coverHero"><div className="issue">Issue 0305</div><h1>{businessName}</h1>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">04</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="coverCaption"><b>{headline}</b><p>{description}</p></div></section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Send an enquiry</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Minimalism / case-study-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
