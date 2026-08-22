import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0034-physio-full-screen-storytelling", "family": "Full-screen Storytelling", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "tabbed|layered-photography|local-service-map|packages>team>awards>proof>services|borderless|retro-bookish", "industry": "physio", "hero": "layered-photography", "navigation": "tabbed", "layout": "local-service-map"};

export default function Template0034({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Morrow Physiotherapy Studio");
  const headline = String(content.headline || "Evidence-led rehabilitation with measurable milestones and practical home plans.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Injury assessment", "Sports rehabilitation", "Post-operative rehab", "Mobility programmes", "Return-to-work planning"];
  const industryLabel = "Physiotherapy studio";
  const serviceNotes = ["Detailed movement assessment to identify the root cause, not just the symptom.", "Hands-on manual therapy combined with targeted home exercise programmes.", "Sports rehabilitation pathways built around your return-to-performance timeline.", "Post-operative rehab with direct communication with your surgical team.", "Long-term mobility strategies so you stay active well beyond discharge."];
  const proofPoints = ["HCPC registered", "Onsite gym and equipment", "Home exercise app included", "GP referrals accepted"];
  const testimonial = "Back on the pitch in 8 weeks after my ACL — the rehab plan was specific to my sport, not generic advice.";
  const team = [{"name": "Aster Lead", "role": "Principal / Lead"}, {"name": "Vale Team", "role": "Client experience"}, {"name": "Civic Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Physiotherapy studio / Project A", "Physiotherapy studio / Project B", "Physiotherapy studio / Project C", "Physiotherapy studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Evidence-led rehabilitation with measurable milestones and practical home plans. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#81946f";
  return <main className="zp0034" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0034{--bg:#f4eee5;--fg:#302821;--primary:#81946f;--primary-fg:#050505;--secondary:#c55d4d;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:28px;background:var(--bg);color:var(--fg);font-family:Trebuchet MS, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0034 *{box-sizing:border-box}
.zp0034 a{color:inherit;text-decoration:none}
.zp0034 h1,.zp0034 h2,.zp0034 h3,.zp0034 blockquote{font-family:Bookman Old Style, Georgia, serif;text-wrap:balance}
.zp0034 img{max-width:100%;display:block}
.zp0034 button,.zp0034 a{-webkit-tap-highlight-color:transparent}
.zp0034 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0034 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0034 .nav strong{font-family:Bookman Old Style, Georgia, serif;font-size:18px}
.zp0034 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0034 .mobileMenu{display:none}
.zp0034 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0034 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0034 .eyebrow,.zp0034 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0034 h1{font-size:clamp(48px,7.45vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0034 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0034 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0034 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0034 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0034 .visual,.zp0034 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0034 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0034 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(8deg)}
.zp0034 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0034 .heroPhoto{object-fit:cover}
.zp0034 .layeredHero{grid-template-columns:0.85fr 1.15fr}
.zp0034 .layered{position:relative;padding:8%}
.zp0034 .layerCard{position:absolute;right:0;bottom:3%;background:var(--primary);color:var(--primary-fg);padding:22px;transform:rotate(-4deg)}
.zp0034 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0034 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0034 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0034 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0034 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0034 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0034 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0034 .serviceGrid p{color:var(--muted)}
.zp0034 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0034 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0034 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0034 details{border-top:1px solid var(--border);padding:20px 0}
.zp0034 details summary{font-weight:800;cursor:pointer}
.zp0034 details p{color:var(--muted);max-width:70ch}
.zp0034 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0034 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0034 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Bookman Old Style, Georgia, serif;margin-bottom:18px}
.zp0034 .awards>div{max-width:800px;margin-left:auto}
.zp0034 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0034 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0034 .packages>.sectionTitle{grid-column:1/-1}
.zp0034 .packages article{padding:24px;border:1px solid var(--border)}
.zp0034 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0034 .contact .eyebrow{color:var(--bg)}
.zp0034 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0034 .contactMeta{display:grid;gap:10px}
.zp0034 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@media(max-width:1024px){.zp0034 .hero{min-height:auto}
.zp0034 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0034 .proof{grid-template-columns:1fr 1fr}
.zp0034 .packages{grid-template-columns:1fr 1fr}
.zp0034 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0034 .nav nav{display:none}
.zp0034 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0034 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0034 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0034 .mobileMenu nav a{padding:10px 8px}
.zp0034 .hero,.zp0034 .layeredHero{grid-template-columns:1fr}
.zp0034 .section,.zp0034 .sectionTitle,.zp0034 .contact{grid-template-columns:1fr}
.zp0034 .teamGrid{grid-template-columns:1fr 1fr}
.zp0034 .section{display:block}}
@media(max-width:430px){.zp0034{font-size:16px}
.zp0034 .hero,.zp0034 .section,.zp0034 .contact{padding-left:18px;padding-right:18px}
.zp0034 .serviceGrid,.zp0034 .proof,.zp0034 .teamGrid,.zp0034 .packages{grid-template-columns:1fr}
.zp0034 h1{font-size:clamp(42px,14vw,70px)}}

.zp0034 .heroActions a,.zp0034 .primary,.zp0034 .ctaBtn,.zp0034 .btnPrimary,.zp0034 .schedule>a,.zp0034 .newsletter>a{transition:all .2s ease}
.zp0034 .heroActions a:hover,.zp0034 .primary:hover,.zp0034 .ctaBtn:hover,.zp0034 .btnPrimary:hover{
  opacity:.8;letter-spacing:.06em
}
.zp0034 nav a,.zp0034 .nav a,.zp0034 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0034 nav a:hover,.zp0034 .nav a:hover,.zp0034 .footer a:hover{
  color:var(--primary)
}
.zp0034 .serviceGrid article,.zp0034 .projectCard,.zp0034 .teamCard,.zp0034 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0034 .serviceGrid article:hover,.zp0034 .projectCard:hover,.zp0034 .teamCard:hover,.zp0034 .bentoCard:hover{
  transform:scale(1.02)
}
@keyframes zpEnter{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
.zp0034 .heroCopy{animation:zpEnter .7s cubic-bezier(.2,.8,.2,1) both}
.zp0034 .sectionTitle,.zp0034 .section>h2{animation:zpEnter .6s cubic-bezier(.2,.8,.2,1) .1s both}
@media(prefers-reduced-motion:reduce){.zp0034 *,.zp0034 *::before,.zp0034 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0034 a,.zp0034 button,.zp0034 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav tabs"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero layeredHero"><div className="layered">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">33</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="layerCard">{businessName}</div></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Plan your visit</a><a href="#services">Explore</a></div></div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Plan your visit</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Full-screen Storytelling / local-service-map</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
