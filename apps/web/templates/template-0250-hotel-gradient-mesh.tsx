import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0250-hotel-gradient-mesh", "family": "Gradient Mesh", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "left-sidebar|product-demo|local-service-map|manifesto>proof>services>programmes>newsletter|paper-sheet|retro-bookish", "industry": "hotel", "hero": "product-demo", "navigation": "left-sidebar", "layout": "local-service-map"};

export default function Template0250({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Kindred Boutique Hotel");
  const headline = String(content.headline || "A design-led stay shaped by place, quiet details, and genuinely useful hospitality.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Rooms and suites", "Dining", "Spa", "Private events", "Local experiences"];
  const industryLabel = "Boutique hotel";
  const serviceNotes = ["Rooms from studio to suite, each styled individually — no two are identical.", "Breakfast sourced within 30 miles: menus change with the seasons.", "Concierge-arranged experiences: hiking guides, private dining, gallery access.", "Business facilities including private meeting rooms with AV and catering.", "Flexible check-in and late check-out on request — we work around your plans."];
  const proofPoints = ["4-star Visit England rated", "Free parking included", "Same-day room service", "Concierge available 24h"];
  const testimonial = "We've stayed at a lot of boutique hotels. This is the one we keep returning to — they have the details right every single time.";
  const team = [{"name": "Rook Lead", "role": "Principal / Lead"}, {"name": "Northline Team", "role": "Client experience"}, {"name": "Aster Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Boutique hotel / Project A", "Boutique hotel / Project B", "Boutique hotel / Project C", "Boutique hotel / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A design-led stay shaped by place, quiet details, and genuinely useful hospitality. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#dc2f2f";
  return <main className="zp0250" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0250{--bg:#f5f4ef;--fg:#141414;--primary:#dc2f2f;--primary-fg:#ffffff;--secondary:#0b5fff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:3px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:28px;background:var(--bg);color:var(--fg);font-family:Trebuchet MS, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0250 *{box-sizing:border-box}
.zp0250 a{color:inherit;text-decoration:none}
.zp0250 h1,.zp0250 h2,.zp0250 h3,.zp0250 blockquote{font-family:Bookman Old Style, Georgia, serif;text-wrap:balance}
.zp0250 img{max-width:100%;display:block}
.zp0250 button,.zp0250 a{-webkit-tap-highlight-color:transparent}
.zp0250 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0250 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0250 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0250 .mobileMenu{display:none}
.zp0250:has(.navRail)>.hero,.zp0250:has(.navRail)>.section,.zp0250:has(.navRail)>.contact,.zp0250:has(.navRail)>.footer{margin-left:190px}
.zp0250 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0250 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0250 .eyebrow,.zp0250 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0250 h1{font-size:clamp(48px,8.0vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0250 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0250 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0250 .heroActions a,.zp0250 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0250 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0250 .visual,.zp0250 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0250 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0250 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:3px;right:-8%;top:-18%;transform:rotate(8deg)}
.zp0250 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0250 .heroPhoto{object-fit:cover}
.zp0250 .productHero{grid-template-columns:0.85fr 1.15fr}
.zp0250 .productFrame{padding:14px;border:var(--line) solid var(--border);border-radius:calc(var(--radius) + 8px);background:var(--surface)}
.zp0250 .productBar{height:24px;border-bottom:1px solid var(--border);margin-bottom:14px}
.zp0250 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0250 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0250 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0250 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0250 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0250 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0250 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0250 .serviceGrid p{color:var(--muted)}
.zp0250 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0250 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0250 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0250 details{border-top:1px solid var(--border);padding:20px 0}
.zp0250 details summary{font-weight:800;cursor:pointer}
.zp0250 details p{color:var(--muted);max-width:70ch}
.zp0250 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0250 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Bookman Old Style, Georgia, serif;letter-spacing:-.04em;max-width:17ch}
.zp0250 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0250 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0250 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0250 .contact .eyebrow{color:var(--bg)}
.zp0250 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0250 .contactMeta{display:grid;gap:10px}
.zp0250 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0250{background-image:radial-gradient(circle at 15% 10%,color-mix(in srgb,var(--primary) 18%,transparent),transparent 36%),radial-gradient(circle at 90% 25%,color-mix(in srgb,var(--secondary) 15%,transparent),transparent 34%)}
.zp0250 .serviceGrid article{backdrop-filter:blur(14px);background:color-mix(in srgb,var(--surface) 70%,transparent)}
.zp0250 .heroCopy{animation:enter-249 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-249{from{opacity:0;transform:translateY(27px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0250 .hero{min-height:auto}
.zp0250 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0250 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0250 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0250 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0250 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0250 .mobileMenu nav a{padding:10px 8px}
.zp0250 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0250:has(.navRail)>.hero,.zp0250:has(.navRail)>.section,.zp0250:has(.navRail)>.contact,.zp0250:has(.navRail)>.footer{margin-left:0}
.zp0250 .hero,.zp0250 .productHero{grid-template-columns:1fr}
.zp0250 .section,.zp0250 .sectionTitle,.zp0250 .contact{grid-template-columns:1fr}
.zp0250 .section{display:block}}
@media(max-width:430px){.zp0250{font-size:16px}
.zp0250 .hero,.zp0250 .section,.zp0250 .contact{padding-left:18px;padding-right:18px}
.zp0250 .serviceGrid,.zp0250 .proof,.zp0250 .programmes>div:last-child{grid-template-columns:1fr}
.zp0250 h1{font-size:clamp(42px,14vw,70px)}}

.zp0250 .heroActions a,.zp0250 .primary,.zp0250 .ctaBtn,.zp0250 .btnPrimary,.zp0250 .schedule>a,.zp0250 .newsletter>a{transition:all .2s ease}
.zp0250 .heroActions a:hover,.zp0250 .primary:hover,.zp0250 .ctaBtn:hover,.zp0250 .btnPrimary:hover{
  opacity:.9;box-shadow:0 4px 16px rgba(0,0,0,.2)
}
.zp0250 nav a,.zp0250 .nav a,.zp0250 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0250 nav a:hover,.zp0250 .nav a:hover,.zp0250 .footer a:hover{
  color:var(--primary)
}
.zp0250 .serviceGrid article,.zp0250 .projectCard,.zp0250 .teamCard,.zp0250 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0250 .serviceGrid article:hover,.zp0250 .projectCard:hover,.zp0250 .teamCard:hover,.zp0250 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0250 *,.zp0250 *::before,.zp0250 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0250 a,.zp0250 button,.zp0250 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero productHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Check availability</a><a href="#services">Explore</a></div></div><div className="productFrame"><div className="productBar"/>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">49</span><div className="visualMark"/><small>{businessName}</small></div>}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Check availability</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Gradient Mesh / local-service-map</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
