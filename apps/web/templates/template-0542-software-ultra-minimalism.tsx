import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0542-software-ultra-minimalism", "family": "Ultra Minimalism", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "asymmetric-cluster|circular-focus|full-bleed-chapters|services>comparison>proof>gallery>menu>packages|circular|ceremonial", "industry": "software", "hero": "circular-focus", "navigation": "asymmetric-cluster", "layout": "full-bleed-chapters"};

export default function Template0542({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Tandem Software Studio");
  const headline = String(content.headline || "Experienced product engineering for teams that need reliable software and clear delivery.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Product engineering", "Web applications", "Mobile apps", "Platform modernization", "Support"];
  const industryLabel = "Software studio";
  const serviceNotes = ["Agile delivery with two-week sprints: working software every fortnight, not just updates.", "Code quality: 85%+ test coverage required before any feature ships to production.", "Architecture review at project start — we identify technical risk before writing a line.", "Maintenance packages that include dependency updates, security patches, and monitoring.", "Source code escrow and full handover documentation as standard on every engagement."];
  const proofPoints = ["ISO 9001 quality certified", "GitHub-first delivery", "85%+ test coverage minimum", "GDPR compliant processes"];
  const testimonial = "Every sprint we had something working to test. The quality was high from the start — no big crunch at the end.";
  const team = [{"name": "Northline Lead", "role": "Principal / Lead"}, {"name": "Aster Team", "role": "Client experience"}, {"name": "Vale Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Software studio / Project A", "Software studio / Project B", "Software studio / Project C", "Software studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Experienced product engineering for teams that need reliable software and clear delivery. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff7800";
  return <main className="zp0542" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0542{--bg:#101010;--fg:#f5f5f5;--primary:#ff7800;--primary-fg:#050505;--secondary:#f6d500;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:999px;--line:0px;--shadow:none;--max:1200px;--space:28px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0542 *{box-sizing:border-box}
.zp0542 a{color:inherit;text-decoration:none}
.zp0542 h1,.zp0542 h2,.zp0542 h3,.zp0542 blockquote{font-family:Copperplate, Georgia, serif;text-wrap:balance}
.zp0542 img{max-width:100%;display:block}
.zp0542 button,.zp0542 a{-webkit-tap-highlight-color:transparent}
.zp0542 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0542 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0542 .nav strong{font-family:Copperplate, Georgia, serif;font-size:18px}
.zp0542 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0542 .nav.cluster{align-items:flex-end}
.zp0542 .mobileMenu{display:none}
.zp0542 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0542 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0542 .eyebrow,.zp0542 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0542 h1{font-size:clamp(48px,6.35vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0542 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0542 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0542 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0542 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0542 .visual,.zp0542 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0542 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0542 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:50%;right:-8%;top:-18%;transform:rotate(-12deg)}
.zp0542 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0542 .heroPhoto{object-fit:cover}
.zp0542 .circleHero{grid-template-columns:0.85fr 1.15fr}
.zp0542 .circleHero{grid-template-columns:1fr 1fr}
.zp0542 .circleFrame{aspect-ratio:1;border-radius:50%;overflow:hidden;border:1px solid var(--border)}
.zp0542 .circleFrame>*{height:100%;border-radius:50%}
.zp0542 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0542 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0542 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0542 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0542 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0542 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0542 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0542 .serviceGrid p{color:var(--muted)}
.zp0542 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0542 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0542 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0542 details{border-top:1px solid var(--border);padding:20px 0}
.zp0542 details summary{font-weight:800;cursor:pointer}
.zp0542 details p{color:var(--muted);max-width:70ch}
.zp0542 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0542 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0542 .galleryGrid>*:first-child{grid-row:1/3}
.zp0542 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0542 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0542 .g2,.zp0542 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0542 .menuSection>div:last-child p{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0542 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0542 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0542 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0542 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0542 .packages>.sectionTitle{grid-column:1/-1}
.zp0542 .packages article{padding:24px;border:1px solid var(--border)}
.zp0542 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0542 .contact .eyebrow{color:var(--bg)}
.zp0542 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0542 .contactMeta{display:grid;gap:10px}
.zp0542 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0542 .section:nth-of-type(even){margin:0 2vw;background:var(--surface)}
.zp0542 .heroCopy{animation:enter-541 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-541{from{opacity:0;transform:translateY(19px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0542 .hero{min-height:auto}
.zp0542 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0542 .proof{grid-template-columns:1fr 1fr}
.zp0542 .packages{grid-template-columns:1fr 1fr}
.zp0542 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0542 .nav nav{display:none}
.zp0542 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0542 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0542 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0542 .mobileMenu nav a{padding:10px 8px}
.zp0542 .hero,.zp0542 .circleHero{grid-template-columns:1fr}
.zp0542 .section,.zp0542 .sectionTitle,.zp0542 .contact{grid-template-columns:1fr}
.zp0542 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0542 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0542 .section{display:block}}
@media(max-width:430px){.zp0542{font-size:16px}
.zp0542 .hero,.zp0542 .section,.zp0542 .contact{padding-left:18px;padding-right:18px}
.zp0542 .serviceGrid,.zp0542 .proof,.zp0542 .packages,.zp0542 .compareGrid{grid-template-columns:1fr}
.zp0542 h1{font-size:clamp(42px,14vw,70px)}
.zp0542 .galleryGrid{grid-template-columns:1fr}
.zp0542 .galleryGrid>*:first-child{grid-column:auto}}

.zp0542 .heroActions a,.zp0542 .primary,.zp0542 .ctaBtn,.zp0542 .btnPrimary,.zp0542 .schedule>a,.zp0542 .newsletter>a{transition:all .2s ease}
.zp0542 .heroActions a:hover,.zp0542 .primary:hover,.zp0542 .ctaBtn:hover,.zp0542 .btnPrimary:hover{
  opacity:.75
}
.zp0542 nav a,.zp0542 .nav a,.zp0542 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0542 nav a:hover,.zp0542 .nav a:hover,.zp0542 .footer a:hover{
  opacity:.6
}
.zp0542 .serviceGrid article,.zp0542 .projectCard,.zp0542 .teamCard,.zp0542 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0542 .serviceGrid article:hover,.zp0542 .projectCard:hover,.zp0542 .teamCard:hover,.zp0542 .bentoCard:hover{
  opacity:.9
}
@media(prefers-reduced-motion:reduce){.zp0542 *,.zp0542 *::before,.zp0542 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0542 a,.zp0542 button,.zp0542 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav cluster"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav><span>Est. 2026</span></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero circleHero"><div className="circleFrame">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">41</span><div className="visualMark"/><small>{businessName}</small></div>}</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">View selected work</a><a href="#services">Explore</a></div></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section menuSection"><div className="sectionTitle"><span>Selection</span><h2>Current favourites.</h2></div><div>{services.map((s,i)=><p key={s}><span>{s}</span><b>{i%2?"Seasonal":"Signature"}</b></p>)}</div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>View selected work</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Ultra Minimalism / full-bleed-chapters</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
