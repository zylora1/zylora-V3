import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0272-resort-architectural", "family": "Architectural", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "centered-logo|asymmetric-editorial|conversion-first|comparison>proof>services>menu>hours>packages|heavy-frame|newspaper", "industry": "resort", "hero": "asymmetric-editorial", "navigation": "centered-logo", "layout": "conversion-first"};

export default function Template0272({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Kite Resort");
  const headline = String(content.headline || "A destination stay combining privacy, landscape, food, and considered service.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Villas", "Wellness", "Dining", "Excursions", "Celebrations"];
  const industryLabel = "Resort";
  const serviceNotes = ["All-inclusive packages covering dining, spa, water sports, and excursions.", "Private beach with supervised swim zones and non-motorised water sports included.", "Kids' programme for ages 4–14 supervised by qualified childcare professionals.", "Adults-only pool deck and lounge for guests seeking a quieter experience.", "Dedicated wedding and event planning service with full on-site coordination."];
  const proofPoints = ["TripAdvisor Travellers' Choice", "Butler service on villas", "Included water sports", "Non-motorised sports free"];
  const testimonial = "The family holiday I didn't think we could afford to be perfect. The team anticipated everything before we asked.";
  const team = [{"name": "Stone & Pine Lead", "role": "Principal / Lead"}, {"name": "Foxglove Team", "role": "Client experience"}, {"name": "Atlas Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Resort / Project A", "Resort / Project B", "Resort / Project C", "Resort / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A destination stay combining privacy, landscape, food, and considered service. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#8c9a4b";
  return <main className="zp0272" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0272{--bg:#f4f4ea;--fg:#24241e;--primary:#8c9a4b;--primary-fg:#050505;--secondary:#d18b47;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:36px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0272 *{box-sizing:border-box}
.zp0272 a{color:inherit;text-decoration:none}
.zp0272 h1,.zp0272 h2,.zp0272 h3,.zp0272 blockquote{font-family:Times New Roman, serif;text-wrap:balance}
.zp0272 img{max-width:100%;display:block}
.zp0272 button,.zp0272 a{-webkit-tap-highlight-color:transparent}
.zp0272 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0272 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0272 .nav strong{font-family:Times New Roman, serif;font-size:18px}
.zp0272 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0272 .nav.centered strong{order:2;font-size:24px}
.zp0272 .nav.centered nav:first-child{order:1}
.zp0272 .nav.centered nav:last-child{order:3}
.zp0272 .mobileMenu{display:none}
.zp0272 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0272 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0272 .eyebrow,.zp0272 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0272 h1{font-size:clamp(48px,6.35vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0272 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0272 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0272 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0272 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0272 .visual,.zp0272 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0272 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0272 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(-12deg)}
.zp0272 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0272 .heroPhoto{object-fit:cover}
.zp0272 .asymHero{grid-template-columns:0.85fr 1.15fr}
.zp0272 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0272 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0272 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0272 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0272 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0272 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0272 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0272 .serviceGrid p{color:var(--muted)}
.zp0272 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0272 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0272 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0272 details{border-top:1px solid var(--border);padding:20px 0}
.zp0272 details summary{font-weight:800;cursor:pointer}
.zp0272 details p{color:var(--muted);max-width:70ch}
.zp0272 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0272 .hours dl{margin:0}
.zp0272 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0272 .menuSection>div:last-child p{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0272 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0272 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0272 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0272 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0272 .packages>.sectionTitle{grid-column:1/-1}
.zp0272 .packages article{padding:24px;border:1px solid var(--border)}
.zp0272 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0272 .contact .eyebrow{color:var(--bg)}
.zp0272 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0272 .contactMeta{display:grid;gap:10px}
.zp0272 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@media(max-width:1024px){.zp0272 .hero{min-height:auto}
.zp0272 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0272 .proof{grid-template-columns:1fr 1fr}
.zp0272 .packages{grid-template-columns:1fr 1fr}
.zp0272 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0272 .nav nav{display:none}
.zp0272 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0272 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0272 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0272 .mobileMenu nav a{padding:10px 8px}
.zp0272 .hero,.zp0272 .asymHero{grid-template-columns:1fr}
.zp0272 .section,.zp0272 .sectionTitle,.zp0272 .hours,.zp0272 .contact{grid-template-columns:1fr}
.zp0272 .section{display:block}}
@media(max-width:430px){.zp0272{font-size:16px}
.zp0272 .hero,.zp0272 .section,.zp0272 .contact{padding-left:18px;padding-right:18px}
.zp0272 .serviceGrid,.zp0272 .proof,.zp0272 .packages,.zp0272 .compareGrid{grid-template-columns:1fr}
.zp0272 h1{font-size:clamp(42px,14vw,70px)}}

.zp0272 .heroActions a,.zp0272 .primary,.zp0272 .ctaBtn,.zp0272 .btnPrimary,.zp0272 .schedule>a,.zp0272 .newsletter>a{transition:all .2s ease}
.zp0272 .heroActions a:hover,.zp0272 .primary:hover,.zp0272 .ctaBtn:hover,.zp0272 .btnPrimary:hover{
  opacity:.8;letter-spacing:.06em
}
.zp0272 nav a,.zp0272 .nav a,.zp0272 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0272 nav a:hover,.zp0272 .nav a:hover,.zp0272 .footer a:hover{
  opacity:.7
}
.zp0272 .serviceGrid article,.zp0272 .projectCard,.zp0272 .teamCard,.zp0272 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0272 .serviceGrid article:hover,.zp0272 .projectCard:hover,.zp0272 .teamCard:hover,.zp0272 .bentoCard:hover{
  transform:translateY(-3px)
}
@keyframes zpEnter{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
.zp0272 .heroCopy{animation:zpEnter .7s cubic-bezier(.2,.8,.2,1) both}
.zp0272 .sectionTitle,.zp0272 .section>h2{animation:zpEnter .6s cubic-bezier(.2,.8,.2,1) .1s both}
@media(prefers-reduced-motion:reduce){.zp0272 *,.zp0272 *::before,.zp0272 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0272 a,.zp0272 button,.zp0272 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav centered"><nav><a href="#services">Services</a></nav><strong>{businessName}</strong><nav><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero asymHero"><div className="heroNumber">02</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Check availability</a><a href="#services">Explore</a></div></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">71</span><div className="visualMark"/><small>{businessName}</small></div>}</section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section menuSection"><div className="sectionTitle"><span>Selection</span><h2>Current favourites.</h2></div><div>{services.map((s,i)=><p key={s}><span>{s}</span><b>{i%2?"Seasonal":"Signature"}</b></p>)}</div></section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Check availability</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Architectural / conversion-first</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
