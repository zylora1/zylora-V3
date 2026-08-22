import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0278-travel-immersive-portfolio", "family": "Immersive Portfolio", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "mega-utility|timeline-hero|menu-led|services>products>proof>hours>gallery>destinations|pill-controls|ceremonial", "industry": "travel", "hero": "timeline-hero", "navigation": "mega-utility", "layout": "menu-led"};

export default function Template0278({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Mosaic Travel Studio");
  const headline = String(content.headline || "Trips designed around how you actually want to spend your days.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Tailored itineraries", "Honeymoons", "Family travel", "Group journeys", "Concierge support"];
  const industryLabel = "Travel studio";
  const serviceNotes = ["Curated itineraries designed by specialists who've made every journey themselves.", "Small-group tours: maximum 12 people, so guides can respond to the group.", "Solo traveller programme with built-in social moments and private space.", "Flexibility built into every trip — optional activities, not mandatory schedules.", "24h in-destination support from someone who knows the location, not a call centre."];
  const proofPoints = ["ATOL protected", "Average group: 8 travellers", "5-star guide rating average", "Carbon offset included"];
  const testimonial = "I've done package holidays and I've done this. There's no comparison — every day had something that felt genuinely discovered.";
  const team = [{"name": "Foundry Lead", "role": "Principal / Lead"}, {"name": "Rook Team", "role": "Client experience"}, {"name": "Northline Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Travel studio / Project A", "Travel studio / Project B", "Travel studio / Project C", "Travel studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Trips designed around how you actually want to spend your days. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff5449";
  return <main className="zp0278" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0278{--bg:#18090c;--fg:#fff3f1;--primary:#ff5449;--primary-fg:#050505;--secondary:#f6c65b;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:28px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:28px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0278 *{box-sizing:border-box}
.zp0278 a{color:inherit;text-decoration:none}
.zp0278 h1,.zp0278 h2,.zp0278 h3,.zp0278 blockquote{font-family:Copperplate, Georgia, serif;text-wrap:balance}
.zp0278 img{max-width:100%;display:block}
.zp0278 button,.zp0278 a{-webkit-tap-highlight-color:transparent}
.zp0278 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0278 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0278 .nav strong{font-family:Copperplate, Georgia, serif;font-size:18px}
.zp0278 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0278 .mobileMenu{display:none}
.zp0278 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0278 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0278 .eyebrow,.zp0278 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0278 h1{font-size:clamp(48px,6.9vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0278 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0278 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0278 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0278 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0278 .timelineHero{grid-template-columns:.4fr 1.6fr}
.zp0278 .timelineLine{display:flex;flex-direction:column;justify-content:space-between;height:60vh;border-left:2px solid var(--primary);padding-left:18px}
.zp0278 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0278 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0278 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0278 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0278 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0278 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0278 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0278 .serviceGrid p{color:var(--muted)}
.zp0278 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0278 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0278 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0278 details{border-top:1px solid var(--border);padding:20px 0}
.zp0278 details summary{font-weight:800;cursor:pointer}
.zp0278 details p{color:var(--muted);max-width:70ch}
.zp0278 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0278 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0278 .galleryGrid>*:first-child{grid-row:1/3}
.zp0278 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0278 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0278 .g2,.zp0278 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0278 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0278 .hours dl{margin:0}
.zp0278 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0278 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0278 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0278 .p1,.zp0278 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0278 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0278 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0278 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0278 .contact .eyebrow{color:var(--bg)}
.zp0278 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0278 .contactMeta{display:grid;gap:10px}
.zp0278 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0278 .heroCopy{animation:enter-277 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-277{from{opacity:0;transform:translateY(35px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0278 .hero{min-height:auto}
.zp0278 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0278 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0278 .nav nav{display:none}
.zp0278 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0278 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0278 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0278 .mobileMenu nav a{padding:10px 8px}
.zp0278 .hero,.zp0278 .timelineHero{grid-template-columns:1fr}
.zp0278 .section,.zp0278 .sectionTitle,.zp0278 .hours,.zp0278 .contact{grid-template-columns:1fr}
.zp0278 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0278 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0278 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0278 .section{display:block}}
@media(max-width:430px){.zp0278{font-size:16px}
.zp0278 .hero,.zp0278 .section,.zp0278 .contact{padding-left:18px;padding-right:18px}
.zp0278 .serviceGrid,.zp0278 .proof,.zp0278 .collectionGrid,.zp0278 .destinations>div:last-child{grid-template-columns:1fr}
.zp0278 h1{font-size:clamp(42px,14vw,70px)}
.zp0278 .galleryGrid{grid-template-columns:1fr}
.zp0278 .galleryGrid>*:first-child{grid-column:auto}}

.zp0278 .heroActions a,.zp0278 .primary,.zp0278 .ctaBtn,.zp0278 .btnPrimary,.zp0278 .schedule>a,.zp0278 .newsletter>a{transition:all .2s ease}
.zp0278 .heroActions a:hover,.zp0278 .primary:hover,.zp0278 .ctaBtn:hover,.zp0278 .btnPrimary:hover{
  opacity:.8
}
.zp0278 nav a,.zp0278 .nav a,.zp0278 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0278 nav a:hover,.zp0278 .nav a:hover,.zp0278 .footer a:hover{
  opacity:.65
}
.zp0278 .serviceGrid article,.zp0278 .projectCard,.zp0278 .teamCard,.zp0278 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0278 .serviceGrid article:hover,.zp0278 .projectCard:hover,.zp0278 .teamCard:hover,.zp0278 .bentoCard:hover{
  transform:scale(1.03)
}
@media(prefers-reduced-motion:reduce){.zp0278 *,.zp0278 *::before,.zp0278 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0278 a,.zp0278 button,.zp0278 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav utility"><strong>{businessName}</strong><span>Open today</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero timelineHero"><div className="timelineLine"><span>Start</span><span>Today</span><span>Next</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a quote</a><a href="#services">Explore</a></div></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a quote</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Immersive Portfolio / menu-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
