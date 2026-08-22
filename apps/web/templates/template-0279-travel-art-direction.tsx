import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0279-travel-art-direction", "family": "Art Direction", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "editorial-index|index-led|timeline-narrative|research>story>services>proof>destinations>manifesto>press|asymmetric-radius|geometric", "industry": "travel", "hero": "index-led", "navigation": "editorial-index", "layout": "timeline-narrative"};

export default function Template0279({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Foxglove Travel Studio");
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
  const proofPoints = ["ATOL protected", "Average group: 8 travellers", "5-star guide rating average", "Carbon offset included"];
  const storyQuote = "\u201cTrips designed around how you actually want to spend your days.\u201d";
  const storyBody = "Foxglove Travel Studio is presented as a real working travel studio, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "I've done package holidays and I've done this. There's no comparison — every day had something that felt genuinely discovered.";
  const team = [{"name": "Kindred Lead", "role": "Principal / Lead"}, {"name": "Tandem Team", "role": "Client experience"}, {"name": "Morrow Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Travel studio / Project A", "Travel studio / Project B", "Travel studio / Project C", "Travel studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Trips designed around how you actually want to spend your days. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#447b56";
  return <main className="zp0279" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0279{--bg:#e8f0ea;--fg:#142319;--primary:#447b56;--primary-fg:#ffffff;--secondary:#b26a42;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:24px 4px 24px 4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:32px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0279 *{box-sizing:border-box}
.zp0279 a{color:inherit;text-decoration:none}
.zp0279 h1,.zp0279 h2,.zp0279 h3,.zp0279 blockquote{font-family:Century Gothic, Avenir, sans-serif;text-wrap:balance}
.zp0279 img{max-width:100%;display:block}
.zp0279 button,.zp0279 a{-webkit-tap-highlight-color:transparent}
.zp0279 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0279 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0279 .nav strong{font-family:Century Gothic, Avenir, sans-serif;font-size:18px}
.zp0279 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0279 .nav.index{display:grid;grid-template-columns:1fr auto 1fr}
.zp0279 .nav.index nav{justify-content:flex-end}
.zp0279 .mobileMenu{display:none}
.zp0279 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0279 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0279 .eyebrow,.zp0279 .sectionTitle>span,.zp0279 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0279 h1{font-size:clamp(48px,7.45vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0279 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0279 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0279 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0279 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0279 .indexHero{grid-template-columns:.6fr 1.4fr}
.zp0279 .indexHero ol{list-style:none;margin:0;padding:0}
.zp0279 .indexHero li{font:700 18px/1.2 Century Gothic, Avenir, sans-serif;padding:18px 0;border-bottom:1px solid var(--border)}
.zp0279 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0279 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0279 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0279 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0279 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0279 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0279 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0279 .serviceGrid p{color:var(--muted)}
.zp0279 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0279 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0279 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0279 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0279 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0279 .story p{color:var(--muted)}
.zp0279 details{border-top:1px solid var(--border);padding:20px 0}
.zp0279 details summary{font-weight:800;cursor:pointer}
.zp0279 details p{color:var(--muted);max-width:70ch}
.zp0279 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Century Gothic, Avenir, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0279 .awards>div{max-width:800px;margin-left:auto}
.zp0279 .awards p,.zp0279 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0279 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0279 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0279 .researchRows{max-width:900px;margin-left:auto}
.zp0279 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0279 .contact .eyebrow{color:var(--bg)}
.zp0279 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0279 .contactMeta{display:grid;gap:10px}
.zp0279 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0279 .heroCopy{animation:enter-278 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-278{from{opacity:0;transform:translateY(36px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0279 .hero{min-height:auto}
.zp0279 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0279 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0279 .nav nav{display:none}
.zp0279 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0279 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0279 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0279 .mobileMenu nav a{padding:10px 8px}
.zp0279 .hero,.zp0279 .indexHero{grid-template-columns:1fr}
.zp0279 .section,.zp0279 .sectionTitle,.zp0279 .story,.zp0279 .contact{grid-template-columns:1fr}
.zp0279 .section{display:block}}
@media(max-width:430px){.zp0279{font-size:16px}
.zp0279 .hero,.zp0279 .section,.zp0279 .contact{padding-left:18px;padding-right:18px}
.zp0279 .serviceGrid,.zp0279 .proof,.zp0279 .destinations>div:last-child{grid-template-columns:1fr}
.zp0279 h1{font-size:clamp(42px,14vw,70px)}
.zp0279 .nav.index{grid-template-columns:1fr auto}
.zp0279 .nav.index>span{display:none}}

.zp0279 .heroActions a,.zp0279 .primary,.zp0279 .ctaBtn,.zp0279 .btnPrimary,.zp0279 .schedule>a,.zp0279 .newsletter>a{transition:all .2s ease}
.zp0279 .heroActions a:hover,.zp0279 .primary:hover,.zp0279 .ctaBtn:hover,.zp0279 .btnPrimary:hover{
  opacity:.85;letter-spacing:.06em
}
.zp0279 nav a,.zp0279 .nav a,.zp0279 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0279 nav a:hover,.zp0279 .nav a:hover,.zp0279 .footer a:hover{
  opacity:.7
}
.zp0279 .serviceGrid article,.zp0279 .projectCard,.zp0279 .teamCard,.zp0279 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0279 .serviceGrid article:hover,.zp0279 .projectCard:hover,.zp0279 .teamCard:hover,.zp0279 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0279 *,.zp0279 *::before,.zp0279 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0279 a,.zp0279 button,.zp0279 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav index"><strong>{businessName}</strong><span>Index 01—03</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero indexHero"><ol><li>{services[0]}</li><li>{services[1]}</li><li>{services[2]}</li></ol><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Apply now</a><a href="#services">Explore</a></div></div></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Apply now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Art Direction / timeline-narrative</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
