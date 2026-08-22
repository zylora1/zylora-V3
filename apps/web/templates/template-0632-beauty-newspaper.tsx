import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0632-beauty-newspaper", "family": "Newspaper", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "corner-dock|video-frame|conversion-first|gallery>services>hours>location>menu>proof|micro-radius|newspaper", "industry": "beauty", "hero": "video-frame", "navigation": "corner-dock", "layout": "conversion-first"};

export default function Template0632({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Bureau Beauty Studio");
  const headline = String(content.headline || "Results-focused treatments in a calm studio with transparent recommendations.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Facials", "Brows", "Skin consultations", "Packages", "Gift cards"];
  const industryLabel = "Beauty studio";
  const serviceNotes = ["Ingredient-transparent formulations: every product listing includes the full INCI.", "Patch-test kits available before committing to any new treatment or product line.", "Skin consultation appointment included with all bespoke skincare programmes.", "Cruelty-free certified and vegan-formulated across the entire product range.", "Results photography at 4 and 8 weeks so you can see the change objectively."];
  const proofPoints = ["Cruelty Free International certified", "Vegan formulations", "Dermatologist tested", "Zero plastic packaging"];
  const testimonial = "My skin has genuinely changed in 8 weeks. The consultation at the start meant every product was right for my skin type.";
  const team = [{"name": "Atlas Lead", "role": "Principal / Lead"}, {"name": "Clove Team", "role": "Client experience"}, {"name": "Harbor Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Beauty studio / Project A", "Beauty studio / Project B", "Beauty studio / Project C", "Beauty studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Results-focused treatments in a calm studio with transparent recommendations. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#8c9a4b";
  return <main className="zp0632" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0632{--bg:#f4f4ea;--fg:#24241e;--primary:#8c9a4b;--primary-fg:#050505;--secondary:#d18b47;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:4px;--line:1px;--shadow:none;--max:1200px;--space:36px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0632 *{box-sizing:border-box}
.zp0632 a{color:inherit;text-decoration:none}
.zp0632 h1,.zp0632 h2,.zp0632 h3,.zp0632 blockquote{font-family:Times New Roman, serif;text-wrap:balance}
.zp0632 img{max-width:100%;display:block}
.zp0632 button,.zp0632 a{-webkit-tap-highlight-color:transparent}
.zp0632 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0632 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0632 .nav strong{font-family:Times New Roman, serif;font-size:18px}
.zp0632 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0632 .mobileMenu{display:none}
.zp0632 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0632 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0632 .eyebrow,.zp0632 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0632 h1{font-size:clamp(48px,6.35vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0632 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0632 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0632 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0632 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0632 .visual,.zp0632 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0632 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0632 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:4px;right:-8%;top:-18%;transform:rotate(-12deg)}
.zp0632 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0632 .heroPhoto{object-fit:cover}
.zp0632 .videoHero{grid-template-columns:1fr 1fr}
.zp0632 .videoFrame{position:relative}
.zp0632 .videoFrame>span{position:absolute;inset:50% auto auto 50%;transform:translate(-50%,-50%);display:grid;place-items:center;width:72px;aspect-ratio:1;border-radius:50%;background:var(--fg);color:var(--bg)}
.zp0632 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0632 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0632 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0632 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0632 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0632 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0632 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0632 .serviceGrid p{color:var(--muted)}
.zp0632 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0632 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0632 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0632 details{border-top:1px solid var(--border);padding:20px 0}
.zp0632 details summary{font-weight:800;cursor:pointer}
.zp0632 details p{color:var(--muted);max-width:70ch}
.zp0632 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0632 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0632 .galleryGrid>*:first-child{grid-row:1/3}
.zp0632 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0632 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0632 .g2,.zp0632 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0632 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0632 .hours dl{margin:0}
.zp0632 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0632 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0632 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0632 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0632 .menuSection>div:last-child p{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0632 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0632 .contact .eyebrow{color:var(--bg)}
.zp0632 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0632 .contactMeta{display:grid;gap:10px}
.zp0632 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0632{background-image:repeating-linear-gradient(0deg,transparent 0 28px,color-mix(in srgb,var(--fg) 4%,transparent) 29px 30px)}
.zp0632 .section:nth-of-type(3n){transform:rotate(-0.35deg)}
.zp0632 .heroCopy p{columns:2;column-gap:30px}
.zp0632 .heroCopy{animation:enter-631 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-631{from{opacity:0;transform:translateY(29px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0632 .hero{min-height:auto}
.zp0632 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0632 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0632 .nav nav{display:none}
.zp0632 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0632 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0632 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0632 .mobileMenu nav a{padding:10px 8px}
.zp0632 .hero,.zp0632 .videoHero{grid-template-columns:1fr}
.zp0632 .section,.zp0632 .sectionTitle,.zp0632 .hours,.zp0632 .location,.zp0632 .contact{grid-template-columns:1fr}
.zp0632 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0632 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0632 .section{display:block}}
@media(max-width:430px){.zp0632{font-size:16px}
.zp0632 .hero,.zp0632 .section,.zp0632 .contact{padding-left:18px;padding-right:18px}
.zp0632 .serviceGrid,.zp0632 .proof{grid-template-columns:1fr}
.zp0632 h1{font-size:clamp(42px,14vw,70px)}
.zp0632 .galleryGrid{grid-template-columns:1fr}
.zp0632 .galleryGrid>*:first-child{grid-column:auto}}

.zp0632 .heroActions a,.zp0632 .primary,.zp0632 .ctaBtn,.zp0632 .btnPrimary,.zp0632 .schedule>a,.zp0632 .newsletter>a{transition:all .2s ease}
.zp0632 .heroActions a:hover,.zp0632 .primary:hover,.zp0632 .ctaBtn:hover,.zp0632 .btnPrimary:hover{
  text-decoration:underline;opacity:.85
}
.zp0632 nav a,.zp0632 .nav a,.zp0632 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0632 nav a:hover,.zp0632 .nav a:hover,.zp0632 .footer a:hover{
  text-decoration:underline
}
.zp0632 .serviceGrid article,.zp0632 .projectCard,.zp0632 .teamCard,.zp0632 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0632 .serviceGrid article:hover,.zp0632 .projectCard:hover,.zp0632 .teamCard:hover,.zp0632 .bentoCard:hover{
  border-color:var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0632 *,.zp0632 *::before,.zp0632 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0632 a,.zp0632 button,.zp0632 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav dock"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero videoHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Register now</a><a href="#services">Explore</a></div></div><div className="videoFrame">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">31</span><div className="visualMark"/><small>{businessName}</small></div>}<span>▶</span></div></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section menuSection"><div className="sectionTitle"><span>Selection</span><h2>Current favourites.</h2></div><div>{services.map((s,i)=><p key={s}><span>{s}</span><b>{i%2?"Seasonal":"Signature"}</b></p>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Register now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Newspaper / conversion-first</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
