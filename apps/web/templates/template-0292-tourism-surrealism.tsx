import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0292-tourism-surrealism", "family": "Surrealism", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "transparent-overlay|bento-hero|offset-cards|proof>location>services>gallery>comparison|cut-corners|sports-editorial", "industry": "tourism", "hero": "bento-hero", "navigation": "transparent-overlay", "layout": "offset-cards"};

export default function Template0292({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Fieldwork Tour Operator");
  const headline = String(content.headline || "Local guides, small groups, and itineraries that go beyond the obvious stops.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["City walks", "Food tours", "Day trips", "Private guides", "Group bookings"];
  const industryLabel = "Tour operator";
  const serviceNotes = ["Local expert guides who grew up here — the stories go beyond what's in guidebooks.", "Self-guided option with offline maps, audio and curated route recommendations.", "Group tour sizes capped at 10 to keep the experience personal and unhurried.", "Seasonal itineraries that take advantage of each quarter's unique conditions.", "Accessible route options with advance notice — contact us to discuss requirements."];
  const proofPoints = ["Licensed tour operators", "Available in 6 languages", "Wheelchair-accessible options", "Private group options"];
  const testimonial = "Our guide knew every shop owner and craftsperson on the route. You can't get that from a travel app.";
  const team = [{"name": "Lumen Lead", "role": "Principal / Lead"}, {"name": "Juniper Team", "role": "Client experience"}, {"name": "Miller & Rowe Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Tour operator / Project A", "Tour operator / Project B", "Tour operator / Project C", "Tour operator / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Local guides, small groups, and itineraries that go beyond the obvious stops. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff3b30";
  return <main className="zp0292" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0292{--bg:#f7f7f7;--fg:#101010;--primary:#ff3b30;--primary-fg:#050505;--secondary:#2222aa;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:36px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0292 *{box-sizing:border-box}
.zp0292 a{color:inherit;text-decoration:none}
.zp0292 h1,.zp0292 h2,.zp0292 h3,.zp0292 blockquote{font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;text-wrap:balance}
.zp0292 img{max-width:100%;display:block}
.zp0292 button,.zp0292 a{-webkit-tap-highlight-color:transparent}
.zp0292 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0292 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0292 .nav strong{font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;font-size:18px}
.zp0292 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0292 .nav.overlay{position:absolute;inset:0 0 auto;background:linear-gradient(180deg,color-mix(in srgb,var(--bg) 76%,transparent),transparent);border:0}
.zp0292 .mobileMenu{display:none}
.zp0292 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0292 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0292 .eyebrow,.zp0292 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0292 h1{font-size:clamp(48px,6.35vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0292 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0292 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0292 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0292 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0292 .visual,.zp0292 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0292 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0292 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:2px;right:-8%;top:-18%;transform:rotate(-4deg)}
.zp0292 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0292 .heroPhoto{object-fit:cover}
.zp0292 .bentoHero{grid-template-columns:.8fr 1.2fr}
.zp0292 .bentoHeroGrid{display:grid;grid-template-columns:1.4fr .6fr;grid-template-rows:1fr 1fr;gap:12px}
.zp0292 .bentoHeroGrid>*{border:1px solid var(--border);border-radius:var(--radius);padding:18px}
.zp0292 .bentoHeroGrid>*:first-child{grid-row:1/3;padding:0;overflow:hidden}
.zp0292 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0292 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0292 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0292 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0292 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0292 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0292 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0292 .serviceGrid p{color:var(--muted)}
.zp0292 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0292 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0292 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0292 details{border-top:1px solid var(--border);padding:20px 0}
.zp0292 details summary{font-weight:800;cursor:pointer}
.zp0292 details p{color:var(--muted);max-width:70ch}
.zp0292 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0292 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0292 .galleryGrid>*:first-child{grid-row:1/3}
.zp0292 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0292 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0292 .g2,.zp0292 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0292 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0292 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0292 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0292 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0292 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0292 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0292 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0292 .contact .eyebrow{color:var(--bg)}
.zp0292 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0292 .contactMeta{display:grid;gap:10px}
.zp0292 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0292 .section:nth-of-type(odd){padding-left:max(24px,calc((100vw - var(--max))/2 + 7vw))}
.zp0292 .heroCopy{animation:enter-291 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-291{from{opacity:0;transform:translateY(29px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0292 .hero{min-height:auto}
.zp0292 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0292 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0292 .nav nav{display:none}
.zp0292 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0292 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0292 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0292 .mobileMenu nav a{padding:10px 8px}
.zp0292 .hero,.zp0292 .bentoHero{grid-template-columns:1fr}
.zp0292 .section,.zp0292 .sectionTitle,.zp0292 .location,.zp0292 .contact{grid-template-columns:1fr}
.zp0292 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0292 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0292 .section{display:block}}
@media(max-width:430px){.zp0292{font-size:16px}
.zp0292 .hero,.zp0292 .section,.zp0292 .contact{padding-left:18px;padding-right:18px}
.zp0292 .serviceGrid,.zp0292 .proof,.zp0292 .compareGrid{grid-template-columns:1fr}
.zp0292 h1{font-size:clamp(42px,14vw,70px)}
.zp0292 .galleryGrid{grid-template-columns:1fr}
.zp0292 .galleryGrid>*:first-child{grid-column:auto}}

.zp0292 .heroActions a,.zp0292 .primary,.zp0292 .ctaBtn,.zp0292 .btnPrimary,.zp0292 .schedule>a,.zp0292 .newsletter>a{transition:all .2s ease}
.zp0292 .heroActions a:hover,.zp0292 .primary:hover,.zp0292 .ctaBtn:hover,.zp0292 .btnPrimary:hover{
  transform:skewX(-3deg) scale(1.03)
}
.zp0292 nav a,.zp0292 .nav a,.zp0292 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0292 nav a:hover,.zp0292 .nav a:hover,.zp0292 .footer a:hover{
  color:var(--primary);text-decoration:underline
}
.zp0292 .serviceGrid article,.zp0292 .projectCard,.zp0292 .teamCard,.zp0292 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0292 .serviceGrid article:hover,.zp0292 .projectCard:hover,.zp0292 .teamCard:hover,.zp0292 .bentoCard:hover{
  transform:rotate(-2deg) scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0292 *,.zp0292 *::before,.zp0292 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0292 a,.zp0292 button,.zp0292 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav overlay"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero bentoHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a quote</a><a href="#services">Explore</a></div></div><div className="bentoHeroGrid">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">91</span><div className="visualMark"/><small>{businessName}</small></div>}<div><b>{services[0]}</b></div><div><b>{services[1]}</b></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a quote</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Surrealism / offset-cards</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
