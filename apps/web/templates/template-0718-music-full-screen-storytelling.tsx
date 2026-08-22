import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0718-music-full-screen-storytelling", "family": "Full-screen Storytelling", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "asymmetric-cluster|carousel-frame|local-service-map|credentials>gallery>hours>services>proof|circular|warm-editorial", "industry": "music", "hero": "carousel-frame", "navigation": "asymmetric-cluster", "layout": "local-service-map"};

export default function Template0718({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Slate Musician");
  const headline = String(content.headline || "A direct home for the music, live dates, visuals, and everything listeners need next.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["New release", "Live dates", "Videos", "Press kit", "Merch"];
  const industryLabel = "Musician";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Oak & Tide Lead", "role": "Principal / Lead"}, {"name": "Studio Nine Team", "role": "Client experience"}, {"name": "Foundry Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Musician / Project A", "Musician / Project B", "Musician / Project C", "Musician / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A direct home for the music, live dates, visuals, and everything listeners need next. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff5449";
  return <main className="zp0718" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0718{--bg:#18090c;--fg:#fff3f1;--primary:#ff5449;--primary-fg:#050505;--secondary:#f6c65b;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:999px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:28px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0718 *{box-sizing:border-box}
.zp0718 a{color:inherit;text-decoration:none}
.zp0718 h1,.zp0718 h2,.zp0718 h3,.zp0718 blockquote{font-family:Palatino Linotype, Georgia, serif;text-wrap:balance}
.zp0718 img{max-width:100%;display:block}
.zp0718 button,.zp0718 a{-webkit-tap-highlight-color:transparent}
.zp0718 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0718 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0718 .nav strong{font-family:Palatino Linotype, Georgia, serif;font-size:18px}
.zp0718 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0718 .nav.cluster{align-items:flex-end}
.zp0718 .mobileMenu{display:none}
.zp0718 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0718 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0718 .eyebrow,.zp0718 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0718 h1{font-size:clamp(48px,6.9vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0718 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0718 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0718 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0718 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0718 .visual,.zp0718 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0718 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0718 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:50%;right:-8%;top:-18%;transform:rotate(8deg)}
.zp0718 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0718 .heroPhoto{object-fit:cover}
.zp0718 .carouselHero{grid-template-columns:auto 1fr 1fr}
.zp0718 .rail{display:grid;align-content:center;gap:18px;font-weight:900}
.zp0718 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0718 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0718 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0718 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0718 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0718 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0718 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0718 .serviceGrid p{color:var(--muted)}
.zp0718 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0718 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0718 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0718 details{border-top:1px solid var(--border);padding:20px 0}
.zp0718 details summary{font-weight:800;cursor:pointer}
.zp0718 details p{color:var(--muted);max-width:70ch}
.zp0718 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0718 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0718 .galleryGrid>*:first-child{grid-row:1/3}
.zp0718 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0718 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0718 .g2,.zp0718 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0718 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0718 .hours dl{margin:0}
.zp0718 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0718 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0718 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0718 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0718 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0718 .contact .eyebrow{color:var(--bg)}
.zp0718 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0718 .contactMeta{display:grid;gap:10px}
.zp0718 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0718 .heroCopy{animation:enter-717 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-717{from{opacity:0;transform:translateY(35px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0718 .hero{min-height:auto}
.zp0718 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0718 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0718 .nav nav{display:none}
.zp0718 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0718 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0718 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0718 .mobileMenu nav a{padding:10px 8px}
.zp0718 .hero,.zp0718 .carouselHero{grid-template-columns:1fr}
.zp0718 .section,.zp0718 .sectionTitle,.zp0718 .hours,.zp0718 .contact{grid-template-columns:1fr}
.zp0718 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0718 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0718 .section{display:block}}
@media(max-width:430px){.zp0718{font-size:16px}
.zp0718 .hero,.zp0718 .section,.zp0718 .contact{padding-left:18px;padding-right:18px}
.zp0718 .serviceGrid,.zp0718 .proof{grid-template-columns:1fr}
.zp0718 h1{font-size:clamp(42px,14vw,70px)}
.zp0718 .galleryGrid{grid-template-columns:1fr}
.zp0718 .galleryGrid>*:first-child{grid-column:auto}}

.zp0718 .heroActions a,.zp0718 .primary,.zp0718 .ctaBtn,.zp0718 .btnPrimary,.zp0718 .schedule>a,.zp0718 .newsletter>a{transition:all .2s ease}
.zp0718 .heroActions a:hover,.zp0718 .primary:hover,.zp0718 .ctaBtn:hover,.zp0718 .btnPrimary:hover{
  opacity:.8;letter-spacing:.06em
}
.zp0718 nav a,.zp0718 .nav a,.zp0718 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0718 nav a:hover,.zp0718 .nav a:hover,.zp0718 .footer a:hover{
  color:var(--primary)
}
.zp0718 .serviceGrid article,.zp0718 .projectCard,.zp0718 .teamCard,.zp0718 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0718 .serviceGrid article:hover,.zp0718 .projectCard:hover,.zp0718 .teamCard:hover,.zp0718 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0718 *,.zp0718 *::before,.zp0718 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0718 a,.zp0718 button,.zp0718 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav cluster"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav><span>Est. 2026</span></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero carouselHero"><div className="rail"><span>01</span><span>02</span><span>03</span></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">17</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a demo</a><a href="#services">Explore</a></div></div></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a demo</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Full-screen Storytelling / local-service-map</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
