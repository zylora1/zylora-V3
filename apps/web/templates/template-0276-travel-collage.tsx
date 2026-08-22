import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0276-travel-collage", "family": "Collage", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "transparent-overlay|product-led|property-led|press>menu>packages>services>awards>process>proof|cut-corners|literary", "industry": "travel", "hero": "product-led", "navigation": "transparent-overlay", "layout": "property-led"};

export default function Template0276({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Pavilion Travel Studio");
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
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["ATOL protected", "Average group: 8 travellers", "5-star guide rating average", "Carbon offset included"];
  const testimonial = "I've done package holidays and I've done this. There's no comparison — every day had something that felt genuinely discovered.";
  const team = [{"name": "Foxglove Lead", "role": "Principal / Lead"}, {"name": "Atlas Team", "role": "Client experience"}, {"name": "Clove Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Travel studio / Project A", "Travel studio / Project B", "Travel studio / Project C", "Travel studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Trips designed around how you actually want to spend your days. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#3d8b5d";
  return <main className="zp0276" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0276{--bg:#f6fff7;--fg:#17241b;--primary:#3d8b5d;--primary-fg:#050505;--secondary:#d8a657;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:36px;background:var(--bg);color:var(--fg);font-family:Helvetica Neue, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0276 *{box-sizing:border-box}
.zp0276 a{color:inherit;text-decoration:none}
.zp0276 h1,.zp0276 h2,.zp0276 h3,.zp0276 blockquote{font-family:Garamond, Georgia, serif;text-wrap:balance}
.zp0276 img{max-width:100%;display:block}
.zp0276 button,.zp0276 a{-webkit-tap-highlight-color:transparent}
.zp0276 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0276 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0276 .nav strong{font-family:Garamond, Georgia, serif;font-size:18px}
.zp0276 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0276 .nav.overlay{position:absolute;inset:0 0 auto;background:linear-gradient(180deg,color-mix(in srgb,var(--bg) 76%,transparent),transparent);border:0}
.zp0276 .mobileMenu{display:none}
.zp0276 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0276 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0276 .eyebrow,.zp0276 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0276 h1{font-size:clamp(48px,5.8vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0276 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0276 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0276 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0276 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0276 .visual,.zp0276 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0276 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0276 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:2px;right:-8%;top:-18%;transform:rotate(4deg)}
.zp0276 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0276 .heroPhoto{object-fit:cover}
.zp0276 .productLedHero{grid-template-columns:1.1fr .9fr}
.zp0276 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0276 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0276 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0276 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0276 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0276 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0276 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0276 .serviceGrid p{color:var(--muted)}
.zp0276 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0276 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0276 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0276 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0276 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0276 details{border-top:1px solid var(--border);padding:20px 0}
.zp0276 details summary{font-weight:800;cursor:pointer}
.zp0276 details p{color:var(--muted);max-width:70ch}
.zp0276 .menuSection>div:last-child p{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0276 .awards>div{max-width:800px;margin-left:auto}
.zp0276 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0276 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0276 .packages>.sectionTitle{grid-column:1/-1}
.zp0276 .packages article{padding:24px;border:1px solid var(--border)}
.zp0276 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0276 .contact .eyebrow{color:var(--bg)}
.zp0276 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0276 .contactMeta{display:grid;gap:10px}
.zp0276 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0276{background-image:repeating-linear-gradient(0deg,transparent 0 28px,color-mix(in srgb,var(--fg) 4%,transparent) 29px 30px)}
.zp0276 .section:nth-of-type(3n){transform:rotate(-0.35deg)}
.zp0276 .heroCopy{animation:enter-275 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-275{from{opacity:0;transform:translateY(33px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0276 .hero{min-height:auto}
.zp0276 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0276 .proof{grid-template-columns:1fr 1fr}
.zp0276 .packages{grid-template-columns:1fr 1fr}
.zp0276 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0276 .nav nav{display:none}
.zp0276 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0276 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0276 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0276 .mobileMenu nav a{padding:10px 8px}
.zp0276 .hero,.zp0276 .productLedHero{grid-template-columns:1fr}
.zp0276 .section,.zp0276 .sectionTitle,.zp0276 .contact{grid-template-columns:1fr}
.zp0276 .section{display:block}}
@media(max-width:430px){.zp0276{font-size:16px}
.zp0276 .hero,.zp0276 .section,.zp0276 .contact{padding-left:18px;padding-right:18px}
.zp0276 .serviceGrid,.zp0276 .proof,.zp0276 .packages{grid-template-columns:1fr}
.zp0276 h1{font-size:clamp(42px,14vw,70px)}}

.zp0276 .heroActions a,.zp0276 .primary,.zp0276 .ctaBtn,.zp0276 .btnPrimary,.zp0276 .schedule>a,.zp0276 .newsletter>a{transition:all .2s ease}
.zp0276 .heroActions a:hover,.zp0276 .primary:hover,.zp0276 .ctaBtn:hover,.zp0276 .btnPrimary:hover{
  transform:rotate(1deg) scale(1.02)
}
.zp0276 nav a,.zp0276 .nav a,.zp0276 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0276 nav a:hover,.zp0276 .nav a:hover,.zp0276 .footer a:hover{
  color:var(--primary)
}
.zp0276 .serviceGrid article,.zp0276 .projectCard,.zp0276 .teamCard,.zp0276 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0276 .serviceGrid article:hover,.zp0276 .projectCard:hover,.zp0276 .teamCard:hover,.zp0276 .bentoCard:hover{
  transform:rotate(-1deg) scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0276 *,.zp0276 *::before,.zp0276 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0276 a,.zp0276 button,.zp0276 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav overlay"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero productLedHero">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">75</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="productTitle"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">View selected work</a><a href="#services">Explore</a></div></div></div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section menuSection"><div className="sectionTitle"><span>Selection</span><h2>Current favourites.</h2></div><div>{services.map((s,i)=><p key={s}><span>{s}</span><b>{i%2?"Seasonal":"Signature"}</b></p>)}</div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>View selected work</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Collage / property-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
