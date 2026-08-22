import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0298-tourism-high-contrast", "family": "High Contrast", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "left-sidebar|service-led|service-catalogue|materials>case-study>story>services>proof|paper-sheet|retro-bookish", "industry": "tourism", "hero": "service-led", "navigation": "left-sidebar", "layout": "service-catalogue"};

export default function Template0298({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Arc Tour Operator");
  const headline = String(content.headline || "Local guides, small groups, and itineraries that go beyond the obvious stops.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["City walks", "Food tours", "Day trips", "Private guides", "Group bookings"];
  const industryLabel = "Tour operator";
  const serviceNotes = ["Local expert guides who grew up here — the stories go beyond what's in guidebooks.", "Self-guided option with offline maps, audio and curated route recommendations.", "Group tour sizes capped at 10 to keep the experience personal and unhurried.", "Seasonal itineraries that take advantage of each quarter's unique conditions.", "Accessible route options with advance notice — contact us to discuss requirements."];
  const proofPoints = ["Licensed tour operators", "Available in 6 languages", "Wheelchair-accessible options", "Private group options"];
  const storyQuote = "\u201cLocal guides, small groups, and itineraries that go beyond the obvious stops.\u201d";
  const storyBody = "Arc Tour Operator is presented as a real working tour operator, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "Our guide knew every shop owner and craftsperson on the route. You can't get that from a travel app.";
  const team = [{"name": "Civic Lead", "role": "Principal / Lead"}, {"name": "Oak & Tide Team", "role": "Client experience"}, {"name": "Studio Nine Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Tour operator / Project A", "Tour operator / Project B", "Tour operator / Project C", "Tour operator / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Local guides, small groups, and itineraries that go beyond the obvious stops. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d04d33";
  return <main className="zp0298" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0298{--bg:#fdf2e9;--fg:#3a241e;--primary:#d04d33;--primary-fg:#050505;--secondary:#c99a54;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:3px;--line:3px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:28px;background:var(--bg);color:var(--fg);font-family:Trebuchet MS, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0298 *{box-sizing:border-box}
.zp0298 a{color:inherit;text-decoration:none}
.zp0298 h1,.zp0298 h2,.zp0298 h3,.zp0298 blockquote{font-family:Bookman Old Style, Georgia, serif;text-wrap:balance}
.zp0298 img{max-width:100%;display:block}
.zp0298 button,.zp0298 a{-webkit-tap-highlight-color:transparent}
.zp0298 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0298 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0298 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0298 .mobileMenu{display:none}
.zp0298:has(.navRail)>.hero,.zp0298:has(.navRail)>.section,.zp0298:has(.navRail)>.contact,.zp0298:has(.navRail)>.footer{margin-left:190px}
.zp0298 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0298 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0298 .eyebrow,.zp0298 .sectionTitle>span,.zp0298 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0298 h1{font-size:clamp(48px,6.9vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0298 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0298 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0298 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0298 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0298 .serviceHero{grid-template-columns:.65fr 1.35fr}
.zp0298 .serviceHeroList{display:grid;gap:4px}
.zp0298 .serviceHeroList span{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0298 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0298 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0298 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0298 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0298 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0298 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0298 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0298 .serviceGrid p{color:var(--muted)}
.zp0298 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0298 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0298 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0298 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0298 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0298 .story p{color:var(--muted)}
.zp0298 details{border-top:1px solid var(--border);padding:20px 0}
.zp0298 details summary{font-weight:800;cursor:pointer}
.zp0298 details p{color:var(--muted);max-width:70ch}
.zp0298 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0298 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0298 .projects article:nth-child(2){transform:translateY(32px)}
.zp0298 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0298 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0298 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0298 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0298 .contact .eyebrow{color:var(--bg)}
.zp0298 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0298 .contactMeta{display:grid;gap:10px}
.zp0298 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0298 .heroCopy{animation:enter-297 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-297{from{opacity:0;transform:translateY(35px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0298 .hero{min-height:auto}
.zp0298 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0298 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0298 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0298 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0298 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0298 .mobileMenu nav a{padding:10px 8px}
.zp0298 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0298:has(.navRail)>.hero,.zp0298:has(.navRail)>.section,.zp0298:has(.navRail)>.contact,.zp0298:has(.navRail)>.footer{margin-left:0}
.zp0298 .hero,.zp0298 .serviceHero{grid-template-columns:1fr}
.zp0298 .section,.zp0298 .sectionTitle,.zp0298 .story,.zp0298 .contact{grid-template-columns:1fr}
.zp0298 .projects .projectGrid{grid-template-columns:1fr}
.zp0298 .projects article:nth-child(2){transform:none}
.zp0298 .section{display:block}}
@media(max-width:430px){.zp0298{font-size:16px}
.zp0298 .hero,.zp0298 .section,.zp0298 .contact{padding-left:18px;padding-right:18px}
.zp0298 .serviceGrid,.zp0298 .proof{grid-template-columns:1fr}
.zp0298 h1{font-size:clamp(42px,14vw,70px)}}

.zp0298 .heroActions a,.zp0298 .primary,.zp0298 .ctaBtn,.zp0298 .btnPrimary,.zp0298 .schedule>a,.zp0298 .newsletter>a{transition:all .2s ease}
.zp0298 .heroActions a:hover,.zp0298 .primary:hover,.zp0298 .ctaBtn:hover,.zp0298 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0298 nav a,.zp0298 .nav a,.zp0298 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0298 nav a:hover,.zp0298 .nav a:hover,.zp0298 .footer a:hover{
  color:var(--primary)
}
.zp0298 .serviceGrid article,.zp0298 .projectCard,.zp0298 .teamCard,.zp0298 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0298 .serviceGrid article:hover,.zp0298 .projectCard:hover,.zp0298 .teamCard:hover,.zp0298 .bentoCard:hover{
  box-shadow:0 0 0 3px var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0298 *,.zp0298 *::before,.zp0298 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0298 a,.zp0298 button,.zp0298 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero serviceHero"><div className="serviceHeroList">{services.slice(0,4).map((s,i)=><span key={s}>{String(i+1).padStart(2,"0")} — {s}</span>)}</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a demo</a><a href="#services">Explore</a></div></div></section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a demo</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>High Contrast / service-catalogue</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
