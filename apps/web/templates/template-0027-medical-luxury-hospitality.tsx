import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0027-medical-luxury-hospitality", "family": "Luxury Hospitality", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "statement-bar|horizontal-strip|timeline-narrative|services>availability>proof>team>schedule>newsletter>testimonial|capsule|poster", "industry": "medical", "hero": "horizontal-strip", "navigation": "statement-bar", "layout": "timeline-narrative"};

export default function Template0027({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Atlas Primary Care Clinic");
  const headline = String(content.headline || "Thoughtful primary care built around continuity, access, and informed decisions.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Annual physicals", "Same-day visits", "Chronic care", "Vaccinations", "Health screenings"];
  const industryLabel = "Primary care clinic";
  const serviceNotes = ["Thorough assessment with a full review of your history and current concerns.", "Evidence-based treatment options explained clearly, so you can make informed decisions.", "Seamless referral network for specialist care when needed.", "Ongoing monitoring with follow-up built into every care plan.", "Preventive guidance tailored to your lifestyle and long-term goals."];
  const proofPoints = ["GMC/NMC registered", "Same-week appointments", "Results reviewed together", "Referrals within 24h"];
  const testimonial = "Finally a clinic that listens. They explained my results in plain language and followed up without me having to chase.";
  const testimonialName = "Marrow client";
  const team = [{"name": "Tandem Lead", "role": "Principal / Lead"}, {"name": "Morrow Team", "role": "Client experience"}, {"name": "Cedar Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Primary care clinic / Project A", "Primary care clinic / Project B", "Primary care clinic / Project C", "Primary care clinic / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Thoughtful primary care built around continuity, access, and informed decisions. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#00b4d8";
  return <main className="zp0027" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0027{--bg:#0d1723;--fg:#eef6ff;--primary:#00b4d8;--primary-fg:#050505;--secondary:#90e0ef;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:32px;--line:1px;--shadow:0 24px 70px color-mix(in srgb,var(--fg) 12%,transparent);--max:1200px;--space:32px;background:var(--bg);color:var(--fg);font-family:Helvetica Neue, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0027 *{box-sizing:border-box}
.zp0027 a{color:inherit;text-decoration:none}
.zp0027 h1,.zp0027 h2,.zp0027 h3,.zp0027 blockquote{font-family:Impact, Arial Black, sans-serif;text-wrap:balance}
.zp0027 img{max-width:100%;display:block}
.zp0027 button,.zp0027 a{-webkit-tap-highlight-color:transparent}
.zp0027 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0027 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0027 .nav strong{font-family:Impact, Arial Black, sans-serif;font-size:18px}
.zp0027 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0027 .nav.statement{display:grid;grid-template-columns:1fr auto 1fr}
.zp0027 .nav.statement>a{justify-self:end}
.zp0027 .mobileMenu{display:none}
.zp0027 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0027 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0027 .eyebrow,.zp0027 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0027 h1{font-size:clamp(48px,6.35vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0027 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0027 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0027 .heroActions a,.zp0027 .schedule>a,.zp0027 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0027 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0027 .visual,.zp0027 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0027 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0027 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:32px;right:-8%;top:-18%;transform:rotate(16deg)}
.zp0027 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0027 .heroPhoto{object-fit:cover}
.zp0027 .stripHero{grid-template-columns:1.2fr .8fr;overflow:hidden}
.zp0027 .stripWord{position:absolute;left:0;top:12px;white-space:nowrap;font:900 clamp(40px,8vw,120px)/1 Impact, Arial Black, sans-serif;opacity:.08}
.zp0027 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0027 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0027 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0027 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0027 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0027 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0027 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0027 .serviceGrid p{color:var(--muted)}
.zp0027 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0027 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0027 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0027 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0027 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0027 .testimonial>div{align-self:end}
.zp0027 .testimonial span{display:block;opacity:.7}
.zp0027 details{border-top:1px solid var(--border);padding:20px 0}
.zp0027 details summary{font-weight:800;cursor:pointer}
.zp0027 details p{color:var(--muted);max-width:70ch}
.zp0027 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0027 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0027 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Impact, Arial Black, sans-serif;margin-bottom:18px}
.zp0027 .schedule,.zp0027 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0027 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0027 .contact .eyebrow{color:var(--bg)}
.zp0027 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0027 .contactMeta{display:grid;gap:10px}
.zp0027 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0027 .heroCopy{animation:enter-26 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-26{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0027 .hero{min-height:auto}
.zp0027 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0027 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0027 .nav nav{display:none}
.zp0027 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0027 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0027 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0027 .mobileMenu nav a{padding:10px 8px}
.zp0027 .hero,.zp0027 .stripHero{grid-template-columns:1fr}
.zp0027 .section,.zp0027 .sectionTitle,.zp0027 .contact{grid-template-columns:1fr}
.zp0027 .testimonial{grid-template-columns:1fr}
.zp0027 .teamGrid{grid-template-columns:1fr 1fr}
.zp0027 .section{display:block}}
@media(max-width:430px){.zp0027{font-size:16px}
.zp0027 .hero,.zp0027 .section,.zp0027 .contact{padding-left:18px;padding-right:18px}
.zp0027 .serviceGrid,.zp0027 .proof,.zp0027 .teamGrid{grid-template-columns:1fr}
.zp0027 h1{font-size:clamp(42px,14vw,70px)}
.zp0027 .nav.statement{grid-template-columns:1fr auto}
.zp0027 .nav.statement>span:first-child{display:none}}

.zp0027 .heroActions a,.zp0027 .primary,.zp0027 .ctaBtn,.zp0027 .btnPrimary,.zp0027 .schedule>a,.zp0027 .newsletter>a{transition:all .2s ease}
.zp0027 .heroActions a:hover,.zp0027 .primary:hover,.zp0027 .ctaBtn:hover,.zp0027 .btnPrimary:hover{
  opacity:.8;letter-spacing:.06em
}
.zp0027 nav a,.zp0027 .nav a,.zp0027 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0027 nav a:hover,.zp0027 .nav a:hover,.zp0027 .footer a:hover{
  opacity:.65
}
.zp0027 .serviceGrid article,.zp0027 .projectCard,.zp0027 .teamCard,.zp0027 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0027 .serviceGrid article:hover,.zp0027 .projectCard:hover,.zp0027 .teamCard:hover,.zp0027 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0027 *,.zp0027 *::before,.zp0027 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0027 a,.zp0027 button,.zp0027 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav statement"><span>Independent / Local / Established</span><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero stripHero"><div className="stripWord">{businessName} — {businessName}</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Apply now</a><a href="#services">Explore</a></div></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">26</span><div className="visualMark"/><small>{businessName}</small></div>}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Apply now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Luxury Hospitality / timeline-narrative</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
