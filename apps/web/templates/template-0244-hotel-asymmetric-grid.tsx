import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0244-hotel-asymmetric-grid", "family": "Asymmetric Grid", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "transparent-overlay|product-led|research-led|projects>services>team>proof>materials|cut-corners|sports-editorial", "industry": "hotel", "hero": "product-led", "navigation": "transparent-overlay", "layout": "research-led"};

export default function Template0244({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Pavilion Boutique Hotel");
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
  const team = [{"name": "Foxglove Lead", "role": "Principal / Lead"}, {"name": "Atlas Team", "role": "Client experience"}, {"name": "Clove Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Boutique hotel / Project A", "Boutique hotel / Project B", "Boutique hotel / Project C", "Boutique hotel / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A design-led stay shaped by place, quiet details, and genuinely useful hospitality. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff7a59";
  return <main className="zp0244" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0244{--bg:#0c1020;--fg:#eff2ff;--primary:#ff7a59;--primary-fg:#050505;--secondary:#5ee0c3;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:36px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0244 *{box-sizing:border-box}
.zp0244 a{color:inherit;text-decoration:none}
.zp0244 h1,.zp0244 h2,.zp0244 h3,.zp0244 blockquote{font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;text-wrap:balance}
.zp0244 img{max-width:100%;display:block}
.zp0244 button,.zp0244 a{-webkit-tap-highlight-color:transparent}
.zp0244 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0244 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0244 .nav strong{font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;font-size:18px}
.zp0244 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0244 .nav.overlay{position:absolute;inset:0 0 auto;background:linear-gradient(180deg,color-mix(in srgb,var(--bg) 76%,transparent),transparent);border:0}
.zp0244 .mobileMenu{display:none}
.zp0244 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0244 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0244 .eyebrow,.zp0244 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0244 h1{font-size:clamp(48px,7.45vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0244 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0244 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0244 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0244 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0244 .visual,.zp0244 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0244 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0244 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:2px;right:-8%;top:-18%;transform:rotate(-16deg)}
.zp0244 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0244 .heroPhoto{object-fit:cover}
.zp0244 .productLedHero{grid-template-columns:1.1fr .9fr}
.zp0244 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0244 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0244 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0244 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0244 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0244 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0244 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0244 .serviceGrid p{color:var(--muted)}
.zp0244 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0244 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0244 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0244 details{border-top:1px solid var(--border);padding:20px 0}
.zp0244 details summary{font-weight:800;cursor:pointer}
.zp0244 details p{color:var(--muted);max-width:70ch}
.zp0244 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0244 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0244 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;margin-bottom:18px}
.zp0244 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0244 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0244 .projects article:nth-child(2){transform:translateY(32px)}
.zp0244 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0244 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0244 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0244 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0244 .contact .eyebrow{color:var(--bg)}
.zp0244 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0244 .contactMeta{display:grid;gap:10px}
.zp0244 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@media(max-width:1024px){.zp0244 .hero{min-height:auto}
.zp0244 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0244 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0244 .nav nav{display:none}
.zp0244 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0244 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0244 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0244 .mobileMenu nav a{padding:10px 8px}
.zp0244 .hero,.zp0244 .productLedHero{grid-template-columns:1fr}
.zp0244 .section,.zp0244 .sectionTitle,.zp0244 .contact{grid-template-columns:1fr}
.zp0244 .teamGrid{grid-template-columns:1fr 1fr}
.zp0244 .projects .projectGrid{grid-template-columns:1fr}
.zp0244 .projects article:nth-child(2){transform:none}
.zp0244 .section{display:block}}
@media(max-width:430px){.zp0244{font-size:16px}
.zp0244 .hero,.zp0244 .section,.zp0244 .contact{padding-left:18px;padding-right:18px}
.zp0244 .serviceGrid,.zp0244 .proof,.zp0244 .teamGrid{grid-template-columns:1fr}
.zp0244 h1{font-size:clamp(42px,14vw,70px)}}

.zp0244 .heroActions a,.zp0244 .primary,.zp0244 .ctaBtn,.zp0244 .btnPrimary,.zp0244 .schedule>a,.zp0244 .newsletter>a{transition:all .2s ease}
.zp0244 .heroActions a:hover,.zp0244 .primary:hover,.zp0244 .ctaBtn:hover,.zp0244 .btnPrimary:hover{
  opacity:.85
}
.zp0244 nav a,.zp0244 .nav a,.zp0244 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0244 nav a:hover,.zp0244 .nav a:hover,.zp0244 .footer a:hover{
  color:var(--primary)
}
.zp0244 .serviceGrid article,.zp0244 .projectCard,.zp0244 .teamCard,.zp0244 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0244 .serviceGrid article:hover,.zp0244 .projectCard:hover,.zp0244 .teamCard:hover,.zp0244 .bentoCard:hover{
  transform:translateY(-2px)
}
@keyframes zpEnter{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
.zp0244 .heroCopy{animation:zpEnter .7s cubic-bezier(.2,.8,.2,1) both}
.zp0244 .sectionTitle,.zp0244 .section>h2{animation:zpEnter .6s cubic-bezier(.2,.8,.2,1) .1s both}
@media(prefers-reduced-motion:reduce){.zp0244 *,.zp0244 *::before,.zp0244 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0244 a,.zp0244 button,.zp0244 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav overlay"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero productLedHero">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">43</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="productTitle"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Check availability</a><a href="#services">Explore</a></div></div></div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Check availability</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Asymmetric Grid / research-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
