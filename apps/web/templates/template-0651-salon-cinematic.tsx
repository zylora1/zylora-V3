import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0651-salon-cinematic", "family": "Cinematic", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "statement-bar|split-image|story-first|comparison>services>case-study>destinations>gallery>proof>availability|capsule|poster", "industry": "salon", "hero": "split-image", "navigation": "statement-bar", "layout": "story-first"};

export default function Template0651({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Juniper Hair Salon");
  const headline = String(content.headline || "Great hair built on consultation, craft, and a style that works after you leave.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Cuts", "Colour", "Texture services", "Treatments", "Bridal styling"];
  const industryLabel = "Hair salon";
  const serviceNotes = ["Colour consultation at every appointment — formulation adjusted for condition and light.", "Bond builder and toning treatments included in all colour services, not an add-on.", "Olaplex, K18, and Kerasilk treatments available across the service menu.", "Evening appointments available Tuesday through Thursday for working clients.", "Bridal service: trial, wedding day, and preparation pack with hair care advice."];
  const proofPoints = ["HABIA qualified stylists", "Aveda flagship partner", "Bridal specialists available", "Same-day appointments most weeks"];
  const testimonial = "My colour has never lasted this well. They adjusted the formula from my last visit based on how it had grown — nobody has ever done that.";
  const team = [{"name": "Slate Lead", "role": "Principal / Lead"}, {"name": "Signal Team", "role": "Client experience"}, {"name": "Mosaic Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Hair salon / Project A", "Hair salon / Project B", "Hair salon / Project C", "Hair salon / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Great hair built on consultation, craft, and a style that works after you leave. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#bdff4f";
  return <main className="zp0651" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0651{--bg:#111813;--fg:#f3f0dc;--primary:#bdff4f;--primary-fg:#050505;--secondary:#8aa376;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:32px;--line:0px;--shadow:0 24px 70px color-mix(in srgb,var(--fg) 12%,transparent);--max:1120px;--space:32px;background:var(--bg);color:var(--fg);font-family:Helvetica Neue, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0651 *{box-sizing:border-box}
.zp0651 a{color:inherit;text-decoration:none}
.zp0651 h1,.zp0651 h2,.zp0651 h3,.zp0651 blockquote{font-family:Impact, Arial Black, sans-serif;text-wrap:balance}
.zp0651 img{max-width:100%;display:block}
.zp0651 button,.zp0651 a{-webkit-tap-highlight-color:transparent}
.zp0651 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0651 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0651 .nav strong{font-family:Impact, Arial Black, sans-serif;font-size:18px}
.zp0651 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0651 .nav.statement{display:grid;grid-template-columns:1fr auto 1fr}
.zp0651 .nav.statement>a{justify-self:end}
.zp0651 .mobileMenu{display:none}
.zp0651 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0651 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0651 .eyebrow,.zp0651 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0651 h1{font-size:clamp(48px,5.8vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0651 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0651 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0651 .heroActions a,.zp0651 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0651 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0651 .visual,.zp0651 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0651 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0651 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:32px;right:-8%;top:-18%;transform:rotate(-8deg)}
.zp0651 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0651 .heroPhoto{object-fit:cover}
.zp0651 .splitHero{grid-template-columns:1.15fr .85fr}
.zp0651 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0651 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0651 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0651 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0651 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0651 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0651 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0651 .serviceGrid p{color:var(--muted)}
.zp0651 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0651 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0651 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0651 details{border-top:1px solid var(--border);padding:20px 0}
.zp0651 details summary{font-weight:800;cursor:pointer}
.zp0651 details p{color:var(--muted);max-width:70ch}
.zp0651 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0651 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0651 .galleryGrid>*:first-child{grid-row:1/3}
.zp0651 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0651 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0651 .g2,.zp0651 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0651 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0651 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0651 .projects article:nth-child(2){transform:translateY(32px)}
.zp0651 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0651 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0651 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0651 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0651 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0651 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0651 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0651 .contact .eyebrow{color:var(--bg)}
.zp0651 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0651 .contactMeta{display:grid;gap:10px}
.zp0651 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0651 .heroCopy{animation:enter-650 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-650{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0651 .hero{min-height:auto}
.zp0651 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0651 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0651 .nav nav{display:none}
.zp0651 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0651 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0651 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0651 .mobileMenu nav a{padding:10px 8px}
.zp0651 .hero,.zp0651 .splitHero{grid-template-columns:1fr}
.zp0651 .section,.zp0651 .sectionTitle,.zp0651 .contact{grid-template-columns:1fr}
.zp0651 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0651 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0651 .projects .projectGrid{grid-template-columns:1fr}
.zp0651 .projects article:nth-child(2){transform:none}
.zp0651 .section{display:block}}
@media(max-width:430px){.zp0651{font-size:16px}
.zp0651 .hero,.zp0651 .section,.zp0651 .contact{padding-left:18px;padding-right:18px}
.zp0651 .serviceGrid,.zp0651 .proof,.zp0651 .destinations>div:last-child,.zp0651 .compareGrid{grid-template-columns:1fr}
.zp0651 h1{font-size:clamp(42px,14vw,70px)}
.zp0651 .galleryGrid{grid-template-columns:1fr}
.zp0651 .galleryGrid>*:first-child{grid-column:auto}
.zp0651 .nav.statement{grid-template-columns:1fr auto}
.zp0651 .nav.statement>span:first-child{display:none}}

.zp0651 .heroActions a,.zp0651 .primary,.zp0651 .ctaBtn,.zp0651 .btnPrimary,.zp0651 .schedule>a,.zp0651 .newsletter>a{transition:all .2s ease}
.zp0651 .heroActions a:hover,.zp0651 .primary:hover,.zp0651 .ctaBtn:hover,.zp0651 .btnPrimary:hover{
  opacity:.85;letter-spacing:.06em
}
.zp0651 nav a,.zp0651 .nav a,.zp0651 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0651 nav a:hover,.zp0651 .nav a:hover,.zp0651 .footer a:hover{
  opacity:.7
}
.zp0651 .serviceGrid article,.zp0651 .projectCard,.zp0651 .teamCard,.zp0651 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0651 .serviceGrid article:hover,.zp0651 .projectCard:hover,.zp0651 .teamCard:hover,.zp0651 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0651 *,.zp0651 *::before,.zp0651 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0651 a,.zp0651 button,.zp0651 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav statement"><span>Independent / Local / Established</span><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero splitHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Join the community</a><a href="#services">Explore</a></div></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">50</span><div className="visualMark"/><small>{businessName}</small></div>}</section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Join the community</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Cinematic / story-first</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
