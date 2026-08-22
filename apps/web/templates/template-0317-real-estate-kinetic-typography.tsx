import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0317-real-estate-kinetic-typography", "family": "Kinetic Typography", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "compact-floating|floating-panels|gallery-index|services>products>community>comparison>proof>projects|hard-outline|condensed-editorial", "industry": "real-estate", "hero": "floating-panels", "navigation": "compact-floating", "layout": "gallery-index"};

export default function Template0317({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Rook Real Estate Agency");
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
  const storyBody = "Rook Real Estate Agency is presented as a real working real estate agency, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "They sold our house in 11 days at full asking price. The communication was clear throughout — no chasing required.";
  const team = [{"name": "Marrow Lead", "role": "Principal / Lead"}, {"name": "Fieldwork Team", "role": "Client experience"}, {"name": "Common Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Real estate agency / Project A", "Real estate agency / Project B", "Real estate agency / Project C", "Real estate agency / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Local market knowledge, sharp presentation, and straightforward advice through every move. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#f06d3b";
  return <main className="zp0317" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0317{--bg:#fff8ef;--fg:#2e251f;--primary:#f06d3b;--primary-fg:#050505;--secondary:#e1b355;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:24px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0317 *{box-sizing:border-box}
.zp0317 a{color:inherit;text-decoration:none}
.zp0317 h1,.zp0317 h2,.zp0317 h3,.zp0317 blockquote{font-family:Arial Narrow, Arial, sans-serif;text-wrap:balance}
.zp0317 img{max-width:100%;display:block}
.zp0317 button,.zp0317 a{-webkit-tap-highlight-color:transparent}
.zp0317 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0317 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0317 .nav strong{font-family:Arial Narrow, Arial, sans-serif;font-size:18px}
.zp0317 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0317 .nav.floating{margin:16px auto;width:min(calc(100% - 32px),var(--max));border:var(--line) solid var(--border);border-radius:999px;background:color-mix(in srgb,var(--bg) 88%,transparent);backdrop-filter:blur(16px);padding:12px 22px}
.zp0317 .mobileMenu{display:none}
.zp0317 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0317 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0317 .eyebrow,.zp0317 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0317 h1{font-size:clamp(48px,6.35vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0317 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0317 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0317 .heroActions a,.zp0317 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0317 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0317 .visual,.zp0317 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0317 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0317 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(-12deg)}
.zp0317 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0317 .heroPhoto{object-fit:cover}
.zp0317 .floatingHero{grid-template-columns:1.15fr .85fr}
.zp0317 .floatStack{position:relative;min-height:500px}
.zp0317 .floatStack>*{position:absolute}
.zp0317 .floatStack>*:first-child{inset:5% 12% 20% 5%}
.zp0317 .floatStack article{padding:18px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius)}
.zp0317 .floatStack article:nth-of-type(1){right:0;top:8%}
.zp0317 .floatStack article:nth-of-type(2){left:0;bottom:3%}
.zp0317 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0317 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0317 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0317 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0317 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0317 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0317 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0317 .serviceGrid p{color:var(--muted)}
.zp0317 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0317 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0317 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0317 details{border-top:1px solid var(--border);padding:20px 0}
.zp0317 details summary{font-weight:800;cursor:pointer}
.zp0317 details p{color:var(--muted);max-width:70ch}
.zp0317 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0317 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0317 .projects article:nth-child(2){transform:translateY(32px)}
.zp0317 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0317 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0317 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0317 .p1,.zp0317 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0317 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0317 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0317 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0317 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0317 .contact .eyebrow{color:var(--bg)}
.zp0317 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0317 .contactMeta{display:grid;gap:10px}
.zp0317 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0317 .heroCopy{animation:enter-316 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-316{from{opacity:0;transform:translateY(34px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0317 .hero{min-height:auto}
.zp0317 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0317 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0317 .nav nav{display:none}
.zp0317 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0317 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0317 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0317 .mobileMenu nav a{padding:10px 8px}
.zp0317 .hero,.zp0317 .floatingHero{grid-template-columns:1fr}
.zp0317 .section,.zp0317 .sectionTitle,.zp0317 .contact{grid-template-columns:1fr}
.zp0317 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0317 .projects .projectGrid{grid-template-columns:1fr}
.zp0317 .projects article:nth-child(2){transform:none}
.zp0317 .section{display:block}}
@media(max-width:430px){.zp0317{font-size:16px}
.zp0317 .hero,.zp0317 .section,.zp0317 .contact{padding-left:18px;padding-right:18px}
.zp0317 .serviceGrid,.zp0317 .proof,.zp0317 .collectionGrid,.zp0317 .compareGrid{grid-template-columns:1fr}
.zp0317 h1{font-size:clamp(42px,14vw,70px)}}

.zp0317 .heroActions a,.zp0317 .primary,.zp0317 .ctaBtn,.zp0317 .btnPrimary,.zp0317 .schedule>a,.zp0317 .newsletter>a{transition:all .2s ease}
.zp0317 .heroActions a:hover,.zp0317 .primary:hover,.zp0317 .ctaBtn:hover,.zp0317 .btnPrimary:hover{
  transform:scale(1.04);letter-spacing:.06em
}
.zp0317 nav a,.zp0317 .nav a,.zp0317 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0317 nav a:hover,.zp0317 .nav a:hover,.zp0317 .footer a:hover{
  letter-spacing:.08em;color:var(--primary)
}
.zp0317 .serviceGrid article,.zp0317 .projectCard,.zp0317 .teamCard,.zp0317 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0317 .serviceGrid article:hover,.zp0317 .projectCard:hover,.zp0317 .teamCard:hover,.zp0317 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0317 *,.zp0317 *::before,.zp0317 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0317 a,.zp0317 button,.zp0317 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav floating"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero floatingHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Call us</a><a href="#services">Explore</a></div></div><div className="floatStack">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">16</span><div className="visualMark"/><small>{businessName}</small></div>}<article>{services[0]}</article><article>{services[1]}</article></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Call us</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Kinetic Typography / gallery-index</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
