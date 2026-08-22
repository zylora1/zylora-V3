import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0230-bakery-retro-futurism", "family": "Retro Futurism", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "mega-utility|cinematic-fullscreen|masonry-story|products>newsletter>community>services>proof>team|pill-controls|ceremonial", "industry": "bakery", "hero": "cinematic-fullscreen", "navigation": "mega-utility", "layout": "masonry-story"};

export default function Template0230({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Cedar Bakery");
  const headline = String(content.headline || "Slow-fermented bread and seasonal pastry made fresh every morning.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Sourdough", "Viennoiserie", "Celebration cakes", "Wholesale", "Pre-orders"];
  const industryLabel = "Bakery";
  const serviceNotes = ["Everything made from scratch the same morning using traditional techniques.", "Sourdough fermented 24–48 hours for depth of flavour and digestibility.", "Custom celebration cakes with a consultation, tasting session, and design approval.", "Weekly subscription boxes: loaf, pastry, and seasonal jam delivered Friday.", "Wholesale supply to local restaurants and cafes — enquire for terms."];
  const proofPoints = ["Fully licensed bakery", "No preservatives or additives", "Allergen-aware production", "Custom orders accepted"];
  const storyBody = "Cedar Bakery is presented as a real working bakery, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "Their Saturday sourdough sells out by 9am. Worth setting an alarm — I haven't bought supermarket bread in two years.";
  const team = [{"name": "Vale Lead", "role": "Principal / Lead"}, {"name": "Civic Team", "role": "Client experience"}, {"name": "Oak & Tide Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Bakery / Project A", "Bakery / Project B", "Bakery / Project C", "Bakery / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Slow-fermented bread and seasonal pastry made fresh every morning. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#df567f";
  return <main className="zp0230" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0230{--bg:#fff4f4;--fg:#2b1721;--primary:#df567f;--primary-fg:#050505;--secondary:#5c7bd9;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:28px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:28px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0230 *{box-sizing:border-box}
.zp0230 a{color:inherit;text-decoration:none}
.zp0230 h1,.zp0230 h2,.zp0230 h3,.zp0230 blockquote{font-family:Copperplate, Georgia, serif;text-wrap:balance}
.zp0230 img{max-width:100%;display:block}
.zp0230 button,.zp0230 a{-webkit-tap-highlight-color:transparent}
.zp0230 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0230 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0230 .nav strong{font-family:Copperplate, Georgia, serif;font-size:18px}
.zp0230 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0230 .mobileMenu{display:none}
.zp0230 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0230 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0230 .eyebrow,.zp0230 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0230 h1{font-size:clamp(48px,8.0vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0230 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0230 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0230 .heroActions a,.zp0230 .newsletter>a,.zp0230 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0230 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0230 .visual,.zp0230 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0230 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0230 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:28px;right:-8%;top:-18%;transform:rotate(0deg)}
.zp0230 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0230 .heroPhoto{object-fit:cover}
.zp0230 .cinematic{padding:0;min-height:100vh}
.zp0230 .cinematic>.heroPhoto,.zp0230 .cinematic>.visual{position:absolute;inset:0;width:100%;height:100%;border:0;border-radius:0;object-fit:cover}
.zp0230 .cinematic .shade{position:absolute;inset:0;background:linear-gradient(90deg,color-mix(in srgb,var(--bg) 90%,transparent),transparent 75%)}
.zp0230 .cinematic .heroCopy{padding:max(80px,8vw);align-self:end}
.zp0230 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0230 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0230 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0230 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0230 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0230 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0230 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0230 .serviceGrid p{color:var(--muted)}
.zp0230 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0230 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0230 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0230 details{border-top:1px solid var(--border);padding:20px 0}
.zp0230 details summary{font-weight:800;cursor:pointer}
.zp0230 details p{color:var(--muted);max-width:70ch}
.zp0230 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0230 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0230 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Copperplate, Georgia, serif;margin-bottom:18px}
.zp0230 .newsletter,.zp0230 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0230 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0230 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0230 .p1,.zp0230 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0230 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0230 .contact .eyebrow{color:var(--bg)}
.zp0230 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0230 .contactMeta{display:grid;gap:10px}
.zp0230 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@media(max-width:1024px){.zp0230 .hero{min-height:auto}
.zp0230 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0230 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0230 .nav nav{display:none}
.zp0230 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0230 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0230 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0230 .mobileMenu nav a{padding:10px 8px}
.zp0230 .hero{grid-template-columns:1fr}
.zp0230 .section,.zp0230 .sectionTitle,.zp0230 .contact{grid-template-columns:1fr}
.zp0230 .teamGrid{grid-template-columns:1fr 1fr}
.zp0230 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0230 .section{display:block}}
@media(max-width:430px){.zp0230{font-size:16px}
.zp0230 .hero,.zp0230 .section,.zp0230 .contact{padding-left:18px;padding-right:18px}
.zp0230 .serviceGrid,.zp0230 .proof,.zp0230 .teamGrid,.zp0230 .collectionGrid{grid-template-columns:1fr}
.zp0230 h1{font-size:clamp(42px,14vw,70px)}}

.zp0230 .heroActions a,.zp0230 .primary,.zp0230 .ctaBtn,.zp0230 .btnPrimary,.zp0230 .schedule>a,.zp0230 .newsletter>a{transition:all .2s ease}
.zp0230 .heroActions a:hover,.zp0230 .primary:hover,.zp0230 .ctaBtn:hover,.zp0230 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);box-shadow:0 0 20px color-mix(in srgb,var(--primary) 40%,transparent)
}
.zp0230 nav a,.zp0230 .nav a,.zp0230 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0230 nav a:hover,.zp0230 .nav a:hover,.zp0230 .footer a:hover{
  color:var(--primary)
}
.zp0230 .serviceGrid article,.zp0230 .projectCard,.zp0230 .teamCard,.zp0230 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0230 .serviceGrid article:hover,.zp0230 .projectCard:hover,.zp0230 .teamCard:hover,.zp0230 .bentoCard:hover{
  box-shadow:0 0 12px color-mix(in srgb,var(--primary) 30%,transparent)
}
@keyframes zpEnter{from{opacity:0;transform:translateY(16px);filter:blur(4px)}to{opacity:1;transform:none;filter:none}}
.zp0230 .heroCopy{animation:zpEnter .7s cubic-bezier(.2,.8,.2,1) both}
.zp0230 .sectionTitle,.zp0230 .section>h2{animation:zpEnter .6s cubic-bezier(.2,.8,.2,1) .1s both}
@media(prefers-reduced-motion:reduce){.zp0230 *,.zp0230 *::before,.zp0230 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0230 a,.zp0230 button,.zp0230 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav utility"><strong>{businessName}</strong><span>Open today</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero cinematic">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">29</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="shade"/><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Plan your visit</a><a href="#services">Explore</a></div></div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Plan your visit</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Retro Futurism / masonry-story</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
