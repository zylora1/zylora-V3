import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0213-cafe-monochrome", "family": "Monochrome", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "lower-third|image-collage|split-scroll|services>proof>research>collection>story>newsletter>location|ticket-edge|humanist-classic", "industry": "cafe", "hero": "image-collage", "navigation": "lower-third", "layout": "split-scroll"};

export default function Template0213({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Studio Nine Cafe");
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
  const storyQuote = "\u201cA neighbourhood cafe for careful coffee, fresh food, and unhurried mornings.\u201d";
  const storyBody = "Studio Nine Cafe is presented as a real working cafe, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "I come here three times a week. The coffee is consistent, the staff know my order, and it's the one place I can actually get work done.";
  const team = [{"name": "Bureau Lead", "role": "Principal / Lead"}, {"name": "Elm Team", "role": "Client experience"}, {"name": "Marrow Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Cafe / Project A", "Cafe / Project B", "Cafe / Project C", "Cafe / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A neighbourhood cafe for careful coffee, fresh food, and unhurried mornings. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#7a46ff";
  return <main className="zp0213" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0213{--bg:#f6f1ff;--fg:#241837;--primary:#7a46ff;--primary-fg:#ffffff;--secondary:#f179c6;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:8px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:24px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0213 *{box-sizing:border-box}
.zp0213 a{color:inherit;text-decoration:none}
.zp0213 h1,.zp0213 h2,.zp0213 h3,.zp0213 blockquote{font-family:Baskerville, Georgia, serif;text-wrap:balance}
.zp0213 img{max-width:100%;display:block}
.zp0213 button,.zp0213 a{-webkit-tap-highlight-color:transparent}
.zp0213 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0213 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0213 .nav strong{font-family:Baskerville, Georgia, serif;font-size:18px}
.zp0213 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0213 .nav.lower{position:absolute;top:auto;bottom:0;width:100%;border-top:var(--line) solid var(--border)}
.zp0213 .mobileMenu{display:none}
.zp0213 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0213 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0213 .eyebrow,.zp0213 .sectionTitle>span,.zp0213 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0213 h1{font-size:clamp(48px,6.9vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0213 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0213 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0213 .heroActions a,.zp0213 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0213 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0213 .visual,.zp0213 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0213 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0213 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:8px;right:-8%;top:-18%;transform:rotate(4deg)}
.zp0213 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0213 .heroPhoto{object-fit:cover}
.zp0213 .collageHero{grid-template-columns:.8fr 1.2fr}
.zp0213 .collage{display:grid;grid-template-columns:1.2fr .6fr;grid-template-rows:1fr 1fr;gap:12px}
.zp0213 .collage>*:first-child{grid-row:1/3}
.zp0213 .miniVisual{background:var(--primary);border-radius:var(--radius)}
.zp0213 .miniVisual.alt{background:var(--secondary)}
.zp0213 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0213 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0213 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0213 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0213 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0213 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0213 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0213 .serviceGrid p{color:var(--muted)}
.zp0213 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0213 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0213 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0213 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0213 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0213 .story p{color:var(--muted)}
.zp0213 details{border-top:1px solid var(--border);padding:20px 0}
.zp0213 details summary{font-weight:800;cursor:pointer}
.zp0213 details p{color:var(--muted);max-width:70ch}
.zp0213 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0213 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0213 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0213 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0213 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0213 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0213 .p1,.zp0213 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0213 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0213 .researchRows{max-width:900px;margin-left:auto}
.zp0213 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0213 .contact .eyebrow{color:var(--bg)}
.zp0213 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0213 .contactMeta{display:grid;gap:10px}
.zp0213 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0213 .heroCopy{animation:enter-212 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-212{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0213 .hero{min-height:auto}
.zp0213 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0213 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0213 .nav nav{display:none}
.zp0213 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0213 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0213 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0213 .mobileMenu nav a{padding:10px 8px}
.zp0213 .hero,.zp0213 .collageHero{grid-template-columns:1fr}
.zp0213 .section,.zp0213 .sectionTitle,.zp0213 .story,.zp0213 .location,.zp0213 .contact{grid-template-columns:1fr}
.zp0213 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0213 .section{display:block}}
@media(max-width:430px){.zp0213{font-size:16px}
.zp0213 .hero,.zp0213 .section,.zp0213 .contact{padding-left:18px;padding-right:18px}
.zp0213 .serviceGrid,.zp0213 .proof,.zp0213 .collectionGrid{grid-template-columns:1fr}
.zp0213 h1{font-size:clamp(42px,14vw,70px)}}

.zp0213 .heroActions a,.zp0213 .primary,.zp0213 .ctaBtn,.zp0213 .btnPrimary,.zp0213 .schedule>a,.zp0213 .newsletter>a{transition:all .2s ease}
.zp0213 .heroActions a:hover,.zp0213 .primary:hover,.zp0213 .ctaBtn:hover,.zp0213 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0213 nav a,.zp0213 .nav a,.zp0213 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0213 nav a:hover,.zp0213 .nav a:hover,.zp0213 .footer a:hover{
  color:var(--secondary)
}
.zp0213 .serviceGrid article,.zp0213 .projectCard,.zp0213 .teamCard,.zp0213 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0213 .serviceGrid article:hover,.zp0213 .projectCard:hover,.zp0213 .teamCard:hover,.zp0213 .bentoCard:hover{
  background:var(--surface)
}
@media(prefers-reduced-motion:reduce){.zp0213 *,.zp0213 *::before,.zp0213 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0213 a,.zp0213 button,.zp0213 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav lower"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero collageHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Reserve a table</a><a href="#services">Explore</a></div></div><div className="collage">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">12</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="miniVisual"/><div className="miniVisual alt"/></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Monochrome / split-scroll</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
