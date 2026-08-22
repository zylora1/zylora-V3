import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0299-tourism-oversized-typography", "family": "Oversized Typography", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "statement-bar|split-image|press-led|community>awards>proof>services>security>schedule|capsule|editorial-serif", "industry": "tourism", "hero": "split-image", "navigation": "statement-bar", "layout": "press-led"};

export default function Template0299({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Juniper Tour Operator");
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
  const storyBody = "Juniper Tour Operator is presented as a real working tour operator, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "Our guide knew every shop owner and craftsperson on the route. You can't get that from a travel app.";
  const team = [{"name": "Slate Lead", "role": "Principal / Lead"}, {"name": "Signal Team", "role": "Client experience"}, {"name": "Mosaic Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Tour operator / Project A", "Tour operator / Project B", "Tour operator / Project C", "Tour operator / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Local guides, small groups, and itineraries that go beyond the obvious stops. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d9703a";
  return <main className="zp0299" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0299{--bg:#10221b;--fg:#f4f0e6;--primary:#d9703a;--primary-fg:#050505;--secondary:#8db89b;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:32px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:32px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0299 *{box-sizing:border-box}
.zp0299 a{color:inherit;text-decoration:none}
.zp0299 h1,.zp0299 h2,.zp0299 h3,.zp0299 blockquote{font-family:Georgia, serif;text-wrap:balance}
.zp0299 img{max-width:100%;display:block}
.zp0299 button,.zp0299 a{-webkit-tap-highlight-color:transparent}
.zp0299 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0299 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0299 .nav strong{font-family:Georgia, serif;font-size:18px}
.zp0299 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0299 .nav.statement{display:grid;grid-template-columns:1fr auto 1fr}
.zp0299 .nav.statement>a{justify-self:end}
.zp0299 .mobileMenu{display:none}
.zp0299 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0299 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0299 .eyebrow,.zp0299 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0299 h1{font-size:clamp(48px,7.45vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0299 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0299 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0299 .heroActions a,.zp0299 .schedule>a,.zp0299 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0299 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0299 .visual,.zp0299 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0299 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0299 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:32px;right:-8%;top:-18%;transform:rotate(-12deg)}
.zp0299 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0299 .heroPhoto{object-fit:cover}
.zp0299 .splitHero{grid-template-columns:1.15fr .85fr}
.zp0299 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0299 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0299 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0299 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0299 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0299 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0299 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0299 .serviceGrid p{color:var(--muted)}
.zp0299 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0299 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0299 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0299 details{border-top:1px solid var(--border);padding:20px 0}
.zp0299 details summary{font-weight:800;cursor:pointer}
.zp0299 details p{color:var(--muted);max-width:70ch}
.zp0299 .schedule,.zp0299 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0299 .awards>div{max-width:800px;margin-left:auto}
.zp0299 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0299 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0299 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0299 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0299 .contact .eyebrow{color:var(--bg)}
.zp0299 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0299 .contactMeta{display:grid;gap:10px}
.zp0299 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0299 .heroCopy{animation:enter-298 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-298{from{opacity:0;transform:translateY(36px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0299 .hero{min-height:auto}
.zp0299 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0299 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0299 .nav nav{display:none}
.zp0299 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0299 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0299 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0299 .mobileMenu nav a{padding:10px 8px}
.zp0299 .hero,.zp0299 .splitHero{grid-template-columns:1fr}
.zp0299 .section,.zp0299 .sectionTitle,.zp0299 .security,.zp0299 .contact{grid-template-columns:1fr}
.zp0299 .section{display:block}}
@media(max-width:430px){.zp0299{font-size:16px}
.zp0299 .hero,.zp0299 .section,.zp0299 .contact{padding-left:18px;padding-right:18px}
.zp0299 .serviceGrid,.zp0299 .proof{grid-template-columns:1fr}
.zp0299 h1{font-size:clamp(42px,14vw,70px)}
.zp0299 .nav.statement{grid-template-columns:1fr auto}
.zp0299 .nav.statement>span:first-child{display:none}}

.zp0299 .heroActions a,.zp0299 .primary,.zp0299 .ctaBtn,.zp0299 .btnPrimary,.zp0299 .schedule>a,.zp0299 .newsletter>a{transition:all .2s ease}
.zp0299 .heroActions a:hover,.zp0299 .primary:hover,.zp0299 .ctaBtn:hover,.zp0299 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0299 nav a,.zp0299 .nav a,.zp0299 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0299 nav a:hover,.zp0299 .nav a:hover,.zp0299 .footer a:hover{
  color:var(--primary)
}
.zp0299 .serviceGrid article,.zp0299 .projectCard,.zp0299 .teamCard,.zp0299 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0299 .serviceGrid article:hover,.zp0299 .projectCard:hover,.zp0299 .teamCard:hover,.zp0299 .bentoCard:hover{
  opacity:.88
}
@media(prefers-reduced-motion:reduce){.zp0299 *,.zp0299 *::before,.zp0299 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0299 a,.zp0299 button,.zp0299 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav statement"><span>Independent / Local / Established</span><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero splitHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Shop the collection</a><a href="#services">Explore</a></div></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">98</span><div className="visualMark"/><small>{businessName}</small></div>}</section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Shop the collection</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Oversized Typography / press-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
