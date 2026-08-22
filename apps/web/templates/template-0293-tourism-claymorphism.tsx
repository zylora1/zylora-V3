import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0293-tourism-claymorphism", "family": "Claymorphism", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "lower-third|testimonial-led|schedule-led|services>packages>proof>comparison>newsletter>values|ticket-edge|condensed-editorial", "industry": "tourism", "hero": "testimonial-led", "navigation": "lower-third", "layout": "schedule-led"};

export default function Template0293({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Aster Tour Operator");
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
  const testimonial = "Our guide knew every shop owner and craftsperson on the route. You can't get that from a travel app.";
  const team = [{"name": "Common Lead", "role": "Principal / Lead"}, {"name": "Stillwater Team", "role": "Client experience"}, {"name": "Kite Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Tour operator / Project A", "Tour operator / Project B", "Tour operator / Project C", "Tour operator / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Local guides, small groups, and itineraries that go beyond the obvious stops. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#7a46ff";
  return <main className="zp0293" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0293{--bg:#f6f1ff;--fg:#241837;--primary:#7a46ff;--primary-fg:#ffffff;--secondary:#f179c6;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:8px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:24px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0293 *{box-sizing:border-box}
.zp0293 a{color:inherit;text-decoration:none}
.zp0293 h1,.zp0293 h2,.zp0293 h3,.zp0293 blockquote{font-family:Arial Narrow, Arial, sans-serif;text-wrap:balance}
.zp0293 img{max-width:100%;display:block}
.zp0293 button,.zp0293 a{-webkit-tap-highlight-color:transparent}
.zp0293 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0293 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0293 .nav strong{font-family:Arial Narrow, Arial, sans-serif;font-size:18px}
.zp0293 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0293 .nav.lower{position:absolute;top:auto;bottom:0;width:100%;border-top:var(--line) solid var(--border)}
.zp0293 .mobileMenu{display:none}
.zp0293 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0293 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0293 .eyebrow,.zp0293 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0293 h1{font-size:clamp(48px,6.9vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0293 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0293 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0293 .heroActions a,.zp0293 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0293 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0293 .quoteHero{grid-template-columns:1fr 1fr}
.zp0293 .quoteHero blockquote{font-size:clamp(36px,5vw,76px);line-height:.98;margin:0}
.zp0293 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0293 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0293 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0293 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0293 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0293 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0293 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0293 .serviceGrid p{color:var(--muted)}
.zp0293 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0293 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0293 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0293 details{border-top:1px solid var(--border);padding:20px 0}
.zp0293 details summary{font-weight:800;cursor:pointer}
.zp0293 details p{color:var(--muted);max-width:70ch}
.zp0293 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0293 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Arial Narrow, Arial, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0293 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0293 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0293 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0293 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0293 .packages>.sectionTitle{grid-column:1/-1}
.zp0293 .packages article{padding:24px;border:1px solid var(--border)}
.zp0293 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0293 .contact .eyebrow{color:var(--bg)}
.zp0293 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0293 .contactMeta{display:grid;gap:10px}
.zp0293 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0293 .heroCopy{animation:enter-292 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-292{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0293 .hero{min-height:auto}
.zp0293 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0293 .proof{grid-template-columns:1fr 1fr}
.zp0293 .packages{grid-template-columns:1fr 1fr}
.zp0293 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0293 .nav nav{display:none}
.zp0293 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0293 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0293 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0293 .mobileMenu nav a{padding:10px 8px}
.zp0293 .hero,.zp0293 .quoteHero{grid-template-columns:1fr}
.zp0293 .section,.zp0293 .sectionTitle,.zp0293 .contact{grid-template-columns:1fr}
.zp0293 .section{display:block}}
@media(max-width:430px){.zp0293{font-size:16px}
.zp0293 .hero,.zp0293 .section,.zp0293 .contact{padding-left:18px;padding-right:18px}
.zp0293 .serviceGrid,.zp0293 .proof,.zp0293 .packages,.zp0293 .compareGrid{grid-template-columns:1fr}
.zp0293 h1{font-size:clamp(42px,14vw,70px)}}

.zp0293 .heroActions a,.zp0293 .primary,.zp0293 .ctaBtn,.zp0293 .btnPrimary,.zp0293 .schedule>a,.zp0293 .newsletter>a{transition:all .2s ease}
.zp0293 .heroActions a:hover,.zp0293 .primary:hover,.zp0293 .ctaBtn:hover,.zp0293 .btnPrimary:hover{
  transform:translateY(-3px) scale(1.02);box-shadow:0 12px 28px color-mix(in srgb,var(--primary) 35%,transparent)
}
.zp0293 nav a,.zp0293 .nav a,.zp0293 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0293 nav a:hover,.zp0293 .nav a:hover,.zp0293 .footer a:hover{
  color:var(--primary)
}
.zp0293 .serviceGrid article,.zp0293 .projectCard,.zp0293 .teamCard,.zp0293 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0293 .serviceGrid article:hover,.zp0293 .projectCard:hover,.zp0293 .teamCard:hover,.zp0293 .bentoCard:hover{
  transform:translateY(-4px) scale(1.01)
}
@media(prefers-reduced-motion:reduce){.zp0293 *,.zp0293 *::before,.zp0293 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0293 a,.zp0293 button,.zp0293 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav lower"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero quoteHero"><blockquote>“Clear, thoughtful, and easy to work with.”</blockquote><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Apply now</a><a href="#services">Explore</a></div></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Apply now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Claymorphism / schedule-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
