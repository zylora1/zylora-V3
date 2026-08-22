import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0810-nonprofit-immersive-portfolio", "family": "Immersive Portfolio", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "left-sidebar|service-led|modular-12|menu>services>case-study>timeline>team>proof>schedule|paper-sheet|utility", "industry": "nonprofit", "hero": "service-led", "navigation": "left-sidebar", "layout": "modular-12"};

export default function Template0810({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Arc Nonprofit");
  const headline = String(content.headline || "A clear case for action, transparent impact, and simple ways to participate or give.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Programmes", "Impact", "Volunteer", "Donate", "Resources"];
  const industryLabel = "Nonprofit";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Civic Lead", "role": "Principal / Lead"}, {"name": "Oak & Tide Team", "role": "Client experience"}, {"name": "Studio Nine Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Nonprofit / Project A", "Nonprofit / Project B", "Nonprofit / Project C", "Nonprofit / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A clear case for action, transparent impact, and simple ways to participate or give. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#dc2f2f";
  return <main className="zp0810" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0810{--bg:#f5f4ef;--fg:#141414;--primary:#dc2f2f;--primary-fg:#ffffff;--secondary:#0b5fff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:3px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:28px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0810 *{box-sizing:border-box}
.zp0810 a{color:inherit;text-decoration:none}
.zp0810 h1,.zp0810 h2,.zp0810 h3,.zp0810 blockquote{font-family:Verdana, sans-serif;text-wrap:balance}
.zp0810 img{max-width:100%;display:block}
.zp0810 button,.zp0810 a{-webkit-tap-highlight-color:transparent}
.zp0810 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0810 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0810 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0810 .mobileMenu{display:none}
.zp0810:has(.navRail)>.hero,.zp0810:has(.navRail)>.section,.zp0810:has(.navRail)>.contact,.zp0810:has(.navRail)>.footer{margin-left:190px}
.zp0810 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0810 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0810 .eyebrow,.zp0810 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0810 h1{font-size:clamp(48px,8.0vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0810 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0810 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0810 .heroActions a,.zp0810 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0810 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0810 .serviceHero{grid-template-columns:.65fr 1.35fr}
.zp0810 .serviceHeroList{display:grid;gap:4px}
.zp0810 .serviceHeroList span{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0810 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0810 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0810 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0810 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0810 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0810 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0810 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0810 .serviceGrid p{color:var(--muted)}
.zp0810 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0810 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0810 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0810 details{border-top:1px solid var(--border);padding:20px 0}
.zp0810 details summary{font-weight:800;cursor:pointer}
.zp0810 details p{color:var(--muted);max-width:70ch}
.zp0810 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0810 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0810 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Verdana, sans-serif;margin-bottom:18px}
.zp0810 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0810 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0810 .projects article:nth-child(2){transform:translateY(32px)}
.zp0810 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0810 .menuSection>div:last-child p{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0810 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0810 .timeline article{padding:20px 0}
.zp0810 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0810 .contact .eyebrow{color:var(--bg)}
.zp0810 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0810 .contactMeta{display:grid;gap:10px}
.zp0810 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0810 .heroCopy{animation:enter-809 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-809{from{opacity:0;transform:translateY(27px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0810 .hero{min-height:auto}
.zp0810 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0810 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0810 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0810 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0810 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0810 .mobileMenu nav a{padding:10px 8px}
.zp0810 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0810:has(.navRail)>.hero,.zp0810:has(.navRail)>.section,.zp0810:has(.navRail)>.contact,.zp0810:has(.navRail)>.footer{margin-left:0}
.zp0810 .hero,.zp0810 .serviceHero{grid-template-columns:1fr}
.zp0810 .section,.zp0810 .sectionTitle,.zp0810 .contact{grid-template-columns:1fr}
.zp0810 .teamGrid{grid-template-columns:1fr 1fr}
.zp0810 .projects .projectGrid{grid-template-columns:1fr}
.zp0810 .projects article:nth-child(2){transform:none}
.zp0810 .section{display:block}}
@media(max-width:430px){.zp0810{font-size:16px}
.zp0810 .hero,.zp0810 .section,.zp0810 .contact{padding-left:18px;padding-right:18px}
.zp0810 .serviceGrid,.zp0810 .proof,.zp0810 .teamGrid{grid-template-columns:1fr}
.zp0810 h1{font-size:clamp(42px,14vw,70px)}}

.zp0810 .heroActions a,.zp0810 .primary,.zp0810 .ctaBtn,.zp0810 .btnPrimary,.zp0810 .schedule>a,.zp0810 .newsletter>a{transition:all .2s ease}
.zp0810 .heroActions a:hover,.zp0810 .primary:hover,.zp0810 .ctaBtn:hover,.zp0810 .btnPrimary:hover{
  opacity:.8
}
.zp0810 nav a,.zp0810 .nav a,.zp0810 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0810 nav a:hover,.zp0810 .nav a:hover,.zp0810 .footer a:hover{
  opacity:.65
}
.zp0810 .serviceGrid article,.zp0810 .projectCard,.zp0810 .teamCard,.zp0810 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0810 .serviceGrid article:hover,.zp0810 .projectCard:hover,.zp0810 .teamCard:hover,.zp0810 .bentoCard:hover{
  transform:scale(1.03)
}
@media(prefers-reduced-motion:reduce){.zp0810 *,.zp0810 *::before,.zp0810 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0810 a,.zp0810 button,.zp0810 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero serviceHero"><div className="serviceHeroList">{services.slice(0,4).map((s,i)=><span key={s}>{String(i+1).padStart(2,"0")} — {s}</span>)}</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a quote</a><a href="#services">Explore</a></div></div></section>
    <section className="section menuSection"><div className="sectionTitle"><span>Selection</span><h2>Current favourites.</h2></div><div>{services.map((s,i)=><p key={s}><span>{s}</span><b>{i%2?"Seasonal":"Signature"}</b></p>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a quote</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Immersive Portfolio / modular-12</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
