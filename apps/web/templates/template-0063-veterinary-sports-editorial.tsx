import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0063-veterinary-sports-editorial", "family": "Sports Editorial", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "vertical-rail|interactive-canvas|timeline-narrative|proof>pricing>services>schedule>values>story>community|soft-12|geometric", "industry": "veterinary", "hero": "interactive-canvas", "navigation": "vertical-rail", "layout": "timeline-narrative"};

export default function Template0063({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Clove Veterinary Clinic");
  const headline = String(content.headline || "Modern veterinary care that keeps owners informed at every step.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Wellness exams", "Vaccinations", "Dental care", "Diagnostics", "Urgent care"];
  const industryLabel = "Veterinary clinic";
  const serviceNotes = ["Comprehensive wellness exams covering nutrition, behaviour, and preventive care.", "Gentle handling protocols that reduce stress for anxious patients.", "In-house laboratory for fast results — no waiting days for basic bloods.", "Dental health programmes that protect your pet's overall wellbeing.", "End-of-life care provided with dignity and full family support."];
  const proofPoints = ["RCVS accredited practice", "24h emergency line", "In-house diagnostics", "Nurse-led clinics"];
  const storyQuote = "\u201cModern veterinary care that keeps owners informed at every step.\u201d";
  const storyBody = "Clove Veterinary Clinic is presented as a real working veterinary clinic, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "Our older dog gets anxious at vets. Here they take their time — she actually walked in willingly on the third visit.";
  const team = [{"name": "Morrow Lead", "role": "Principal / Lead"}, {"name": "Cedar Team", "role": "Client experience"}, {"name": "Arc Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Veterinary clinic / Project A", "Veterinary clinic / Project B", "Veterinary clinic / Project C", "Veterinary clinic / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Modern veterinary care that keeps owners informed at every step. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#5f6fff";
  return <main className="zp0063" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0063{--bg:#eff3ff;--fg:#1a2240;--primary:#5f6fff;--primary-fg:#050505;--secondary:#ff8aa8;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:12px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:32px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0063 *{box-sizing:border-box}
.zp0063 a{color:inherit;text-decoration:none}
.zp0063 h1,.zp0063 h2,.zp0063 h3,.zp0063 blockquote{font-family:Century Gothic, Avenir, sans-serif;text-wrap:balance}
.zp0063 img{max-width:100%;display:block}
.zp0063 button,.zp0063 a{-webkit-tap-highlight-color:transparent}
.zp0063 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0063 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0063 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0063 .mobileMenu{display:none}
.zp0063:has(.navRail)>.hero,.zp0063:has(.navRail)>.section,.zp0063:has(.navRail)>.contact,.zp0063:has(.navRail)>.footer{margin-left:190px}
.zp0063 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0063 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0063 .eyebrow,.zp0063 .sectionTitle>span,.zp0063 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0063 h1{font-size:clamp(48px,6.9vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0063 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0063 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0063 .heroActions a,.zp0063 .schedule>a,.zp0063 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0063 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0063 .canvasHero{overflow:hidden}
.zp0063 .canvasGrid{position:absolute;inset:0;display:grid;grid-template-columns:repeat(4,1fr);opacity:.3}
.zp0063 .canvasGrid i{border-right:1px solid var(--border)}
.zp0063 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0063 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0063 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0063 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0063 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0063 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0063 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0063 .serviceGrid p{color:var(--muted)}
.zp0063 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0063 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0063 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0063 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0063 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0063 .story p{color:var(--muted)}
.zp0063 details{border-top:1px solid var(--border);padding:20px 0}
.zp0063 details summary{font-weight:800;cursor:pointer}
.zp0063 details p{color:var(--muted);max-width:70ch}
.zp0063 .priceRows{border-top:1px solid var(--border)}
.zp0063 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0063 .schedule,.zp0063 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0063 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Century Gothic, Avenir, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0063 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0063 .contact .eyebrow{color:var(--bg)}
.zp0063 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0063 .contactMeta{display:grid;gap:10px}
.zp0063 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0063 .heroCopy{animation:enter-62 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-62{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0063 .hero{min-height:auto}
.zp0063 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0063 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0063 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0063 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0063 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0063 .mobileMenu nav a{padding:10px 8px}
.zp0063 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0063:has(.navRail)>.hero,.zp0063:has(.navRail)>.section,.zp0063:has(.navRail)>.contact,.zp0063:has(.navRail)>.footer{margin-left:0}
.zp0063 .hero{grid-template-columns:1fr}
.zp0063 .section,.zp0063 .sectionTitle,.zp0063 .story,.zp0063 .contact{grid-template-columns:1fr}
.zp0063 .section{display:block}}
@media(max-width:430px){.zp0063{font-size:16px}
.zp0063 .hero,.zp0063 .section,.zp0063 .contact{padding-left:18px;padding-right:18px}
.zp0063 .serviceGrid,.zp0063 .proof{grid-template-columns:1fr}
.zp0063 h1{font-size:clamp(42px,14vw,70px)}
.zp0063 .priceRows article{grid-template-columns:1fr}}

.zp0063 .heroActions a,.zp0063 .primary,.zp0063 .ctaBtn,.zp0063 .btnPrimary,.zp0063 .schedule>a,.zp0063 .newsletter>a{transition:all .2s ease}
.zp0063 .heroActions a:hover,.zp0063 .primary:hover,.zp0063 .ctaBtn:hover,.zp0063 .btnPrimary:hover{
  opacity:.8
}
.zp0063 nav a,.zp0063 .nav a,.zp0063 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0063 nav a:hover,.zp0063 .nav a:hover,.zp0063 .footer a:hover{
  color:var(--primary)
}
.zp0063 .serviceGrid article,.zp0063 .projectCard,.zp0063 .teamCard,.zp0063 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0063 .serviceGrid article:hover,.zp0063 .projectCard:hover,.zp0063 .teamCard:hover,.zp0063 .bentoCard:hover{
  transform:translateY(-3px)
}
@media(prefers-reduced-motion:reduce){.zp0063 *,.zp0063 *::before,.zp0063 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0063 a,.zp0063 button,.zp0063 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail vertical"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero canvasHero"><div className="canvasGrid"><i/><i/><i/><i/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Join the community</a><a href="#services">Explore</a></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Join the community</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Sports Editorial / timeline-narrative</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
