import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0219-cafe-art-deco", "family": "Art Deco", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "statement-bar|horizontal-strip|story-first|products>programmes>location>manifesto>case-study>proof>services|capsule|poster", "industry": "cafe", "hero": "horizontal-strip", "navigation": "statement-bar", "layout": "story-first"};

export default function Template0219({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Atlas Cafe");
  const headline = String(content.headline || "A neighbourhood cafe for careful coffee, fresh food, and unhurried mornings.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Espresso bar", "Breakfast", "Lunch", "House baking", "Catering"];
  const industryLabel = "Cafe";
  const serviceNotes = ["Single-origin espresso and filter programme sourced from farms we've visited.", "Pastries baked in-house each morning — what's there is what we made that day.", "Laptop-friendly with fast wifi and power at every seat.", "Outdoor terrace open from April through October, weather-permitting.", "Weekend brunch until 2pm with seasonal specials not on the regular menu."];
  const proofPoints = ["Specialty coffee certified", "In-house bakery", "Dog friendly", "Wifi and power included"];
  const testimonial = "I come here three times a week. The coffee is consistent, the staff know my order, and it's the one place I can actually get work done.";
  const team = [{"name": "Tandem Lead", "role": "Principal / Lead"}, {"name": "Morrow Team", "role": "Client experience"}, {"name": "Cedar Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Cafe / Project A", "Cafe / Project B", "Cafe / Project C", "Cafe / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A neighbourhood cafe for careful coffee, fresh food, and unhurried mornings. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d9703a";
  return <main className="zp0219" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0219{--bg:#10221b;--fg:#f4f0e6;--primary:#d9703a;--primary-fg:#050505;--secondary:#8db89b;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:32px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:32px;background:var(--bg);color:var(--fg);font-family:Helvetica Neue, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0219 *{box-sizing:border-box}
.zp0219 a{color:inherit;text-decoration:none}
.zp0219 h1,.zp0219 h2,.zp0219 h3,.zp0219 blockquote{font-family:Impact, Arial Black, sans-serif;text-wrap:balance}
.zp0219 img{max-width:100%;display:block}
.zp0219 button,.zp0219 a{-webkit-tap-highlight-color:transparent}
.zp0219 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0219 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0219 .nav strong{font-family:Impact, Arial Black, sans-serif;font-size:18px}
.zp0219 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0219 .nav.statement{display:grid;grid-template-columns:1fr auto 1fr}
.zp0219 .nav.statement>a{justify-self:end}
.zp0219 .mobileMenu{display:none}
.zp0219 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0219 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0219 .eyebrow,.zp0219 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0219 h1{font-size:clamp(48px,7.45vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0219 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0219 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0219 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0219 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0219 .visual,.zp0219 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0219 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0219 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:32px;right:-8%;top:-18%;transform:rotate(-8deg)}
.zp0219 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0219 .heroPhoto{object-fit:cover}
.zp0219 .stripHero{grid-template-columns:1.2fr .8fr;overflow:hidden}
.zp0219 .stripWord{position:absolute;left:0;top:12px;white-space:nowrap;font:900 clamp(40px,8vw,120px)/1 Impact, Arial Black, sans-serif;opacity:.08}
.zp0219 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0219 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0219 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0219 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0219 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0219 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0219 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0219 .serviceGrid p{color:var(--muted)}
.zp0219 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0219 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0219 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0219 details{border-top:1px solid var(--border);padding:20px 0}
.zp0219 details summary{font-weight:800;cursor:pointer}
.zp0219 details p{color:var(--muted);max-width:70ch}
.zp0219 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0219 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0219 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0219 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0219 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0219 .projects article:nth-child(2){transform:translateY(32px)}
.zp0219 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0219 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0219 .p1,.zp0219 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0219 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Impact, Arial Black, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0219 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0219 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0219 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0219 .contact .eyebrow{color:var(--bg)}
.zp0219 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0219 .contactMeta{display:grid;gap:10px}
.zp0219 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0219 .sectionTitle:before{content:"◆";color:var(--primary);font-size:22px}
.zp0219 .visual{clip-path:polygon(50% 0,100% 20%,100% 80%,50% 100%,0 80%,0 20%)}
.zp0219 .heroCopy{animation:enter-218 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-218{from{opacity:0;transform:translateY(36px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0219 .hero{min-height:auto}
.zp0219 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0219 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0219 .nav nav{display:none}
.zp0219 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0219 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0219 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0219 .mobileMenu nav a{padding:10px 8px}
.zp0219 .hero,.zp0219 .stripHero{grid-template-columns:1fr}
.zp0219 .section,.zp0219 .sectionTitle,.zp0219 .location,.zp0219 .contact{grid-template-columns:1fr}
.zp0219 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0219 .projects .projectGrid{grid-template-columns:1fr}
.zp0219 .projects article:nth-child(2){transform:none}
.zp0219 .section{display:block}}
@media(max-width:430px){.zp0219{font-size:16px}
.zp0219 .hero,.zp0219 .section,.zp0219 .contact{padding-left:18px;padding-right:18px}
.zp0219 .serviceGrid,.zp0219 .proof,.zp0219 .collectionGrid,.zp0219 .programmes>div:last-child{grid-template-columns:1fr}
.zp0219 h1{font-size:clamp(42px,14vw,70px)}
.zp0219 .nav.statement{grid-template-columns:1fr auto}
.zp0219 .nav.statement>span:first-child{display:none}}

.zp0219 .heroActions a,.zp0219 .primary,.zp0219 .ctaBtn,.zp0219 .btnPrimary,.zp0219 .schedule>a,.zp0219 .newsletter>a{transition:all .2s ease}
.zp0219 .heroActions a:hover,.zp0219 .primary:hover,.zp0219 .ctaBtn:hover,.zp0219 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);letter-spacing:.08em
}
.zp0219 nav a,.zp0219 .nav a,.zp0219 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0219 nav a:hover,.zp0219 .nav a:hover,.zp0219 .footer a:hover{
  color:var(--primary)
}
.zp0219 .serviceGrid article,.zp0219 .projectCard,.zp0219 .teamCard,.zp0219 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0219 .serviceGrid article:hover,.zp0219 .projectCard:hover,.zp0219 .teamCard:hover,.zp0219 .bentoCard:hover{
  border-color:var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0219 *,.zp0219 *::before,.zp0219 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0219 a,.zp0219 button,.zp0219 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav statement"><span>Independent / Local / Established</span><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero stripHero"><div className="stripWord">{businessName} — {businessName}</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Reserve a table</a><a href="#services">Explore</a></div></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">18</span><div className="visualMark"/><small>{businessName}</small></div>}</section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Art Deco / story-first</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
