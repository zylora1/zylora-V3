import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0338-interiors-full-screen-storytelling", "family": "Full-screen Storytelling", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "tabbed|gallery-wall|masonry-story|services>timeline>availability>integrations>proof>credentials|borderless|modernist-duo", "industry": "interiors", "hero": "gallery-wall", "navigation": "tabbed", "layout": "masonry-story"};

export default function Template0338({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Signal Interior Design Studio");
  const headline = String(content.headline || "Layered interiors with a clear point of view and rigorous attention to daily use.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Interior architecture", "Residential design", "Hospitality", "Furniture sourcing", "Styling"];
  const industryLabel = "Interior design studio";
  const serviceNotes = ["Full design service from brief to final installation, managed by a single lead designer.", "Trade access to furniture, fabrics, and lighting unavailable to the public.", "3D visualisations provided before any purchasing decisions are made.", "Project management including contractor coordination and quality sign-off.", "Styling and accessory curation for the finish that makes a space feel complete."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["BIID member", "3D renders included", "Trade pricing access", "Contractor network available"];
  const testimonial = "The 3D renders before we started meant no surprises. The finished room was exactly what we'd imagined — just better executed.";
  const team = [{"name": "Studio Nine Lead", "role": "Principal / Lead"}, {"name": "Foundry Team", "role": "Client experience"}, {"name": "Rook Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Interior design studio / Project A", "Interior design studio / Project B", "Interior design studio / Project C", "Interior design studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Layered interiors with a clear point of view and rigorous attention to daily use. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d04d33";
  return <main className="zp0338" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0338{--bg:#fdf2e9;--fg:#3a241e;--primary:#d04d33;--primary-fg:#050505;--secondary:#c99a54;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:28px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0338 *{box-sizing:border-box}
.zp0338 a{color:inherit;text-decoration:none}
.zp0338 h1,.zp0338 h2,.zp0338 h3,.zp0338 blockquote{font-family:Futura, Avenir, Arial, sans-serif;text-wrap:balance}
.zp0338 img{max-width:100%;display:block}
.zp0338 button,.zp0338 a{-webkit-tap-highlight-color:transparent}
.zp0338 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0338 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0338 .nav strong{font-family:Futura, Avenir, Arial, sans-serif;font-size:18px}
.zp0338 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0338 .mobileMenu{display:none}
.zp0338 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0338 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0338 .eyebrow,.zp0338 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0338 h1{font-size:clamp(48px,6.9vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0338 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0338 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0338 .heroActions a,.zp0338 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0338 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0338 .wallHero{grid-template-columns:1fr 1fr}
.zp0338 .wall{display:grid;grid-template-columns:1fr 1fr;gap:8px;transform:rotate(-3deg)}
.zp0338 .wall div{min-height:180px;background:color-mix(in srgb,var(--primary) 30%,var(--surface))}
.zp0338 .wall div:nth-child(2n){background:color-mix(in srgb,var(--secondary) 30%,var(--surface))}
.zp0338 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0338 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0338 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0338 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0338 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0338 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0338 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0338 .serviceGrid p{color:var(--muted)}
.zp0338 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0338 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0338 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0338 details{border-top:1px solid var(--border);padding:20px 0}
.zp0338 details summary{font-weight:800;cursor:pointer}
.zp0338 details p{color:var(--muted);max-width:70ch}
.zp0338 .credentials,.zp0338 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0338 .credentials>div,.zp0338 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0338 .credentials b,.zp0338 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0338 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0338 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0338 .timeline article{padding:20px 0}
.zp0338 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0338 .contact .eyebrow{color:var(--bg)}
.zp0338 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0338 .contactMeta{display:grid;gap:10px}
.zp0338 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0338 .heroCopy{animation:enter-337 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-337{from{opacity:0;transform:translateY(35px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0338 .hero{min-height:auto}
.zp0338 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0338 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0338 .nav nav{display:none}
.zp0338 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0338 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0338 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0338 .mobileMenu nav a{padding:10px 8px}
.zp0338 .hero,.zp0338 .wallHero{grid-template-columns:1fr}
.zp0338 .section,.zp0338 .sectionTitle,.zp0338 .contact{grid-template-columns:1fr}
.zp0338 .section{display:block}}
@media(max-width:430px){.zp0338{font-size:16px}
.zp0338 .hero,.zp0338 .section,.zp0338 .contact{padding-left:18px;padding-right:18px}
.zp0338 .serviceGrid,.zp0338 .proof{grid-template-columns:1fr}
.zp0338 h1{font-size:clamp(42px,14vw,70px)}}

.zp0338 .heroActions a,.zp0338 .primary,.zp0338 .ctaBtn,.zp0338 .btnPrimary,.zp0338 .schedule>a,.zp0338 .newsletter>a{transition:all .2s ease}
.zp0338 .heroActions a:hover,.zp0338 .primary:hover,.zp0338 .ctaBtn:hover,.zp0338 .btnPrimary:hover{
  opacity:.8;letter-spacing:.06em
}
.zp0338 nav a,.zp0338 .nav a,.zp0338 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0338 nav a:hover,.zp0338 .nav a:hover,.zp0338 .footer a:hover{
  color:var(--primary)
}
.zp0338 .serviceGrid article,.zp0338 .projectCard,.zp0338 .teamCard,.zp0338 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0338 .serviceGrid article:hover,.zp0338 .projectCard:hover,.zp0338 .teamCard:hover,.zp0338 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0338 *,.zp0338 *::before,.zp0338 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0338 a,.zp0338 button,.zp0338 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav tabs"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero wallHero"><div className="wall"><div/><div/><div/><div/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Register now</a><a href="#services">Explore</a></div></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Register now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Full-screen Storytelling / masonry-story</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
