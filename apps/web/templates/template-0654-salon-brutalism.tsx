import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0654-salon-brutalism", "family": "Brutalism", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "asymmetric-cluster|carousel-frame|image-led-chapters|hours>timeline>gallery>services>newsletter>proof>collection|circular|neo-grotesk", "industry": "salon", "hero": "carousel-frame", "navigation": "asymmetric-cluster", "layout": "image-led-chapters"};

export default function Template0654({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Slate Hair Salon");
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
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["HABIA qualified stylists", "Aveda flagship partner", "Bridal specialists available", "Same-day appointments most weeks"];
  const testimonial = "My colour has never lasted this well. They adjusted the formula from my last visit based on how it had grown — nobody has ever done that.";
  const team = [{"name": "Oak & Tide Lead", "role": "Principal / Lead"}, {"name": "Studio Nine Team", "role": "Client experience"}, {"name": "Foundry Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Hair salon / Project A", "Hair salon / Project B", "Hair salon / Project C", "Hair salon / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Great hair built on consultation, craft, and a style that works after you leave. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d2a679";
  return <main className="zp0654" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0654{--bg:#0d0d0d;--fg:#f3ebe1;--primary:#d2a679;--primary-fg:#050505;--secondary:#aa7b57;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:999px;--line:3px;--shadow:none;--max:1360px;--space:28px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0654 *{box-sizing:border-box}
.zp0654 a{color:inherit;text-decoration:none}
.zp0654 h1,.zp0654 h2,.zp0654 h3,.zp0654 blockquote{font-family:Helvetica Neue, Arial, sans-serif;text-wrap:balance}
.zp0654 img{max-width:100%;display:block}
.zp0654 button,.zp0654 a{-webkit-tap-highlight-color:transparent}
.zp0654 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0654 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0654 .nav strong{font-family:Helvetica Neue, Arial, sans-serif;font-size:18px}
.zp0654 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0654 .nav.cluster{align-items:flex-end}
.zp0654 .mobileMenu{display:none}
.zp0654 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0654 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0654 .eyebrow,.zp0654 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0654 h1{font-size:clamp(48px,7.45vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0654 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0654 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0654 .heroActions a,.zp0654 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0654 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0654 .visual,.zp0654 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0654 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0654 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:50%;right:-8%;top:-18%;transform:rotate(4deg)}
.zp0654 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0654 .heroPhoto{object-fit:cover}
.zp0654 .carouselHero{grid-template-columns:auto 1fr 1fr}
.zp0654 .rail{display:grid;align-content:center;gap:18px;font-weight:900}
.zp0654 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0654 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0654 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0654 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0654 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0654 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0654 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0654 .serviceGrid p{color:var(--muted)}
.zp0654 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0654 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0654 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0654 details{border-top:1px solid var(--border);padding:20px 0}
.zp0654 details summary{font-weight:800;cursor:pointer}
.zp0654 details p{color:var(--muted);max-width:70ch}
.zp0654 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0654 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0654 .galleryGrid>*:first-child{grid-row:1/3}
.zp0654 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0654 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0654 .g2,.zp0654 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0654 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0654 .hours dl{margin:0}
.zp0654 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0654 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0654 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0654 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0654 .p1,.zp0654 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0654 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0654 .timeline article{padding:20px 0}
.zp0654 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0654 .contact .eyebrow{color:var(--bg)}
.zp0654 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0654 .contactMeta{display:grid;gap:10px}
.zp0654 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0654 .heroActions a,.zp0654 .serviceGrid article{box-shadow:8px 8px 0 var(--fg)}
.zp0654 h1{text-transform:uppercase}
.zp0654 .heroCopy{animation:enter-653 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-653{from{opacity:0;transform:translateY(31px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0654 .hero{min-height:auto}
.zp0654 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0654 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0654 .nav nav{display:none}
.zp0654 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0654 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0654 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0654 .mobileMenu nav a{padding:10px 8px}
.zp0654 .hero,.zp0654 .carouselHero{grid-template-columns:1fr}
.zp0654 .section,.zp0654 .sectionTitle,.zp0654 .hours,.zp0654 .contact{grid-template-columns:1fr}
.zp0654 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0654 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0654 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0654 .section{display:block}}
@media(max-width:430px){.zp0654{font-size:16px}
.zp0654 .hero,.zp0654 .section,.zp0654 .contact{padding-left:18px;padding-right:18px}
.zp0654 .serviceGrid,.zp0654 .proof,.zp0654 .collectionGrid{grid-template-columns:1fr}
.zp0654 h1{font-size:clamp(42px,14vw,70px)}
.zp0654 .galleryGrid{grid-template-columns:1fr}
.zp0654 .galleryGrid>*:first-child{grid-column:auto}}

.zp0654 .heroActions a,.zp0654 .primary,.zp0654 .ctaBtn,.zp0654 .btnPrimary,.zp0654 .schedule>a,.zp0654 .newsletter>a{transition:all .2s ease}
.zp0654 .heroActions a:hover,.zp0654 .primary:hover,.zp0654 .ctaBtn:hover,.zp0654 .btnPrimary:hover{
  background:var(--fg);color:var(--bg);transform:translate(-3px,-3px)
}
.zp0654 nav a,.zp0654 .nav a,.zp0654 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0654 nav a:hover,.zp0654 .nav a:hover,.zp0654 .footer a:hover{
  text-decoration:underline
}
.zp0654 .serviceGrid article,.zp0654 .projectCard,.zp0654 .teamCard,.zp0654 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0654 .serviceGrid article:hover,.zp0654 .projectCard:hover,.zp0654 .teamCard:hover,.zp0654 .bentoCard:hover{
  transform:translate(-4px,-4px);box-shadow:4px 4px 0 var(--fg)
}
@media(prefers-reduced-motion:reduce){.zp0654 *,.zp0654 *::before,.zp0654 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0654 a,.zp0654 button,.zp0654 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav cluster"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav><span>Est. 2026</span></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero carouselHero"><div className="rail"><span>01</span><span>02</span><span>03</span></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">53</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">View selected work</a><a href="#services">Explore</a></div></div></section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>View selected work</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Brutalism / image-led-chapters</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
