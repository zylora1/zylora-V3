import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0381-legal-minimalism", "family": "Minimalism", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "compact-floating|floating-panels|architectural-grid|press>team>programmes>community>gallery>services>proof|hard-outline|humanist-classic", "industry": "legal", "hero": "floating-panels", "navigation": "compact-floating", "layout": "architectural-grid"};

export default function Template0381({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Rook Law Firm");
  const headline = String(content.headline || "Practical legal advice, clear next steps, and responsive communication.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Business law", "Dispute resolution", "Property law", "Employment", "Estate planning"];
  const industryLabel = "Law firm";
  const serviceNotes = ["Fixed-fee options for defined scope matters — clear costs before we begin.", "24h response guarantee on all client communications, not just weekdays.", "Plain-English advice: we translate legal complexity into decisions you can make.", "Video and in-person consultation options across all practice areas.", "Regular matter updates so you're never left wondering where things stand."];
  const proofPoints = ["SRA regulated", "Lexcel accredited", "Legal 500 listed", "No win no fee options"];
  const storyBody = "Rook Law Firm is presented as a real working law firm, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "My solicitor explained everything in plain terms and never made me feel like a question was too basic. That's rare.";
  const team = [{"name": "Marrow Lead", "role": "Principal / Lead"}, {"name": "Fieldwork Team", "role": "Client experience"}, {"name": "Common Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Law firm / Project A", "Law firm / Project B", "Law firm / Project C", "Law firm / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Practical legal advice, clear next steps, and responsive communication. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ffcc33";
  return <main className="zp0381" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0381{--bg:#101218;--fg:#f7f5f0;--primary:#ffcc33;--primary-fg:#050505;--secondary:#3f7cff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:0px;--shadow:none;--max:1120px;--space:24px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0381 *{box-sizing:border-box}
.zp0381 a{color:inherit;text-decoration:none}
.zp0381 h1,.zp0381 h2,.zp0381 h3,.zp0381 blockquote{font-family:Baskerville, Georgia, serif;text-wrap:balance}
.zp0381 img{max-width:100%;display:block}
.zp0381 button,.zp0381 a{-webkit-tap-highlight-color:transparent}
.zp0381 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0381 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0381 .nav strong{font-family:Baskerville, Georgia, serif;font-size:18px}
.zp0381 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0381 .nav.floating{margin:16px auto;width:min(calc(100% - 32px),var(--max));border:var(--line) solid var(--border);border-radius:999px;background:color-mix(in srgb,var(--bg) 88%,transparent);backdrop-filter:blur(16px);padding:12px 22px}
.zp0381 .mobileMenu{display:none}
.zp0381 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0381 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0381 .eyebrow,.zp0381 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0381 h1{font-size:clamp(48px,5.8vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0381 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0381 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0381 .heroActions a,.zp0381 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0381 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0381 .visual,.zp0381 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0381 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0381 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(-8deg)}
.zp0381 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0381 .heroPhoto{object-fit:cover}
.zp0381 .floatingHero{grid-template-columns:1.15fr .85fr}
.zp0381 .floatStack{position:relative;min-height:500px}
.zp0381 .floatStack>*{position:absolute}
.zp0381 .floatStack>*:first-child{inset:5% 12% 20% 5%}
.zp0381 .floatStack article{padding:18px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius)}
.zp0381 .floatStack article:nth-of-type(1){right:0;top:8%}
.zp0381 .floatStack article:nth-of-type(2){left:0;bottom:3%}
.zp0381 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0381 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0381 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0381 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0381 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0381 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0381 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0381 .serviceGrid p{color:var(--muted)}
.zp0381 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0381 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0381 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0381 details{border-top:1px solid var(--border);padding:20px 0}
.zp0381 details summary{font-weight:800;cursor:pointer}
.zp0381 details p{color:var(--muted);max-width:70ch}
.zp0381 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0381 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0381 .galleryGrid>*:first-child{grid-row:1/3}
.zp0381 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0381 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0381 .g2,.zp0381 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0381 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0381 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0381 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Baskerville, Georgia, serif;margin-bottom:18px}
.zp0381 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0381 .awards>div{max-width:800px;margin-left:auto}
.zp0381 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0381 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0381 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0381 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0381 .contact .eyebrow{color:var(--bg)}
.zp0381 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0381 .contactMeta{display:grid;gap:10px}
.zp0381 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0381 .heroCopy{animation:enter-380 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-380{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0381 .hero{min-height:auto}
.zp0381 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0381 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0381 .nav nav{display:none}
.zp0381 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0381 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0381 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0381 .mobileMenu nav a{padding:10px 8px}
.zp0381 .hero,.zp0381 .floatingHero{grid-template-columns:1fr}
.zp0381 .section,.zp0381 .sectionTitle,.zp0381 .contact{grid-template-columns:1fr}
.zp0381 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0381 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0381 .teamGrid{grid-template-columns:1fr 1fr}
.zp0381 .section{display:block}}
@media(max-width:430px){.zp0381{font-size:16px}
.zp0381 .hero,.zp0381 .section,.zp0381 .contact{padding-left:18px;padding-right:18px}
.zp0381 .serviceGrid,.zp0381 .proof,.zp0381 .teamGrid,.zp0381 .programmes>div:last-child{grid-template-columns:1fr}
.zp0381 h1{font-size:clamp(42px,14vw,70px)}
.zp0381 .galleryGrid{grid-template-columns:1fr}
.zp0381 .galleryGrid>*:first-child{grid-column:auto}}

.zp0381 .heroActions a,.zp0381 .primary,.zp0381 .ctaBtn,.zp0381 .btnPrimary,.zp0381 .schedule>a,.zp0381 .newsletter>a{transition:all .2s ease}
.zp0381 .heroActions a:hover,.zp0381 .primary:hover,.zp0381 .ctaBtn:hover,.zp0381 .btnPrimary:hover{
  opacity:.75
}
.zp0381 nav a,.zp0381 .nav a,.zp0381 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0381 nav a:hover,.zp0381 .nav a:hover,.zp0381 .footer a:hover{
  opacity:.6
}
.zp0381 .serviceGrid article,.zp0381 .projectCard,.zp0381 .teamCard,.zp0381 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0381 .serviceGrid article:hover,.zp0381 .projectCard:hover,.zp0381 .teamCard:hover,.zp0381 .bentoCard:hover{
  opacity:.9
}
@media(prefers-reduced-motion:reduce){.zp0381 *,.zp0381 *::before,.zp0381 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0381 a,.zp0381 button,.zp0381 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav floating"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero floatingHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Reserve a table</a><a href="#services">Explore</a></div></div><div className="floatStack">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">80</span><div className="visualMark"/><small>{businessName}</small></div>}<article>{services[0]}</article><article>{services[1]}</article></div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Minimalism / architectural-grid</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
