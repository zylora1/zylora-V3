import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0441-consulting-monochrome", "family": "Monochrome", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "fullscreen-menu|archival-grid|community-led|story>services>proof>hours>comparison>case-study>team|hairline|slab", "industry": "consulting", "hero": "archival-grid", "navigation": "fullscreen-menu", "layout": "community-led"};

export default function Template0441({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Foundry Consulting Practice");
  const headline = String(content.headline || "Senior-level thinking paired with practical implementation and measurable outcomes.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Strategy", "Operations", "Transformation", "Research", "Implementation support"];
  const industryLabel = "Consulting practice";
  const serviceNotes = ["Diagnostic phase first — we understand the problem before proposing a solution.", "Delivered by senior practitioners, not junior analysts relabelled as consultants.", "Fixed-scope engagements with clear deliverables and measurable success criteria.", "Knowledge transfer built into every project so client teams can sustain the change.", "Follow-through reviews at 6 and 12 months to confirm outcomes are holding."];
  const proofPoints = ["Average client ROI: 340%", "Senior-only delivery team", "NDA and IP protection", "30-day exit clause"];
  const storyQuote = "\u201cSenior-level thinking paired with practical implementation and measurable outcomes.\u201d";
  const storyBody = "Foundry Consulting Practice is presented as a real working consulting practice, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "They spotted a structural issue in our operations that three previous consultancies had missed. Implemented and sustained.";
  const team = [{"name": "Elm Lead", "role": "Principal / Lead"}, {"name": "Marrow Team", "role": "Client experience"}, {"name": "Fieldwork Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Consulting practice / Project A", "Consulting practice / Project B", "Consulting practice / Project C", "Consulting practice / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Senior-level thinking paired with practical implementation and measurable outcomes. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d5b36a";
  return <main className="zp0441" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0441{--bg:#0a0a0a;--fg:#f5f0e8;--primary:#d5b36a;--primary-fg:#050505;--secondary:#8b6f47;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:24px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0441 *{box-sizing:border-box}
.zp0441 a{color:inherit;text-decoration:none}
.zp0441 h1,.zp0441 h2,.zp0441 h3,.zp0441 blockquote{font-family:Rockwell, Courier New, serif;text-wrap:balance}
.zp0441 img{max-width:100%;display:block}
.zp0441 button,.zp0441 a{-webkit-tap-highlight-color:transparent}
.zp0441 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0441 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0441 .nav strong{font-family:Rockwell, Courier New, serif;font-size:18px}
.zp0441 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0441 .nav.menu details{position:relative}
.zp0441 .nav.menu details nav{position:absolute;right:0;top:36px;display:grid;background:var(--bg);border:1px solid var(--border);padding:18px;min-width:180px}
.zp0441 .mobileMenu{display:none}
.zp0441 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0441 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0441 .eyebrow,.zp0441 .sectionTitle>span,.zp0441 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0441 h1{font-size:clamp(48px,5.8vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0441 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0441 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0441 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0441 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0441 .archiveHero{grid-template-columns:.6fr 1.4fr}
.zp0441 .archiveGrid{display:grid;grid-template-columns:1fr 1fr;align-self:stretch}
.zp0441 .archiveGrid span{display:grid;place-items:center;border:1px solid var(--border)}
.zp0441 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0441 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0441 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0441 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0441 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0441 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0441 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0441 .serviceGrid p{color:var(--muted)}
.zp0441 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0441 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0441 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0441 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0441 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0441 .story p{color:var(--muted)}
.zp0441 details{border-top:1px solid var(--border);padding:20px 0}
.zp0441 details summary{font-weight:800;cursor:pointer}
.zp0441 details p{color:var(--muted);max-width:70ch}
.zp0441 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0441 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0441 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Rockwell, Courier New, serif;margin-bottom:18px}
.zp0441 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0441 .hours dl{margin:0}
.zp0441 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0441 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0441 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0441 .projects article:nth-child(2){transform:translateY(32px)}
.zp0441 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0441 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0441 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0441 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0441 .contact .eyebrow{color:var(--bg)}
.zp0441 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0441 .contactMeta{display:grid;gap:10px}
.zp0441 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0441 .heroCopy{animation:enter-440 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-440{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0441 .hero{min-height:auto}
.zp0441 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0441 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0441 .nav nav{display:none}
.zp0441 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0441 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0441 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0441 .mobileMenu nav a{padding:10px 8px}
.zp0441 .hero,.zp0441 .archiveHero{grid-template-columns:1fr}
.zp0441 .section,.zp0441 .sectionTitle,.zp0441 .story,.zp0441 .hours,.zp0441 .contact{grid-template-columns:1fr}
.zp0441 .teamGrid{grid-template-columns:1fr 1fr}
.zp0441 .projects .projectGrid{grid-template-columns:1fr}
.zp0441 .projects article:nth-child(2){transform:none}
.zp0441 .section{display:block}}
@media(max-width:430px){.zp0441{font-size:16px}
.zp0441 .hero,.zp0441 .section,.zp0441 .contact{padding-left:18px;padding-right:18px}
.zp0441 .serviceGrid,.zp0441 .proof,.zp0441 .teamGrid,.zp0441 .compareGrid{grid-template-columns:1fr}
.zp0441 h1{font-size:clamp(42px,14vw,70px)}}

.zp0441 .heroActions a,.zp0441 .primary,.zp0441 .ctaBtn,.zp0441 .btnPrimary,.zp0441 .schedule>a,.zp0441 .newsletter>a{transition:all .2s ease}
.zp0441 .heroActions a:hover,.zp0441 .primary:hover,.zp0441 .ctaBtn:hover,.zp0441 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0441 nav a,.zp0441 .nav a,.zp0441 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0441 nav a:hover,.zp0441 .nav a:hover,.zp0441 .footer a:hover{
  color:var(--secondary)
}
.zp0441 .serviceGrid article,.zp0441 .projectCard,.zp0441 .teamCard,.zp0441 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0441 .serviceGrid article:hover,.zp0441 .projectCard:hover,.zp0441 .teamCard:hover,.zp0441 .bentoCard:hover{
  background:var(--surface)
}
@media(prefers-reduced-motion:reduce){.zp0441 *,.zp0441 *::before,.zp0441 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0441 a,.zp0441 button,.zp0441 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav menu"><strong>{businessName}</strong><details><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero archiveHero"><div className="archiveGrid"><span>Archive</span><span>{industryLabel}</span><span>Selected</span><span>2026</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Join the community</a><a href="#services">Explore</a></div></div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Join the community</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Monochrome / community-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
