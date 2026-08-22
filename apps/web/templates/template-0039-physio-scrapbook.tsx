import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0039-physio-scrapbook", "family": "Scrapbook", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "editorial-index|minimal-statement|story-first|proof>community>timeline>products>team>services>research|asymmetric-radius|geometric", "industry": "physio", "hero": "minimal-statement", "navigation": "editorial-index", "layout": "story-first"};

export default function Template0039({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Lumen Physiotherapy Studio");
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
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["HCPC registered", "Onsite gym and equipment", "Home exercise app included", "GP referrals accepted"];
  const storyBody = "Lumen Physiotherapy Studio is presented as a real working physiotherapy studio, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "Back on the pitch in 8 weeks after my ACL — the rehab plan was specific to my sport, not generic advice.";
  const team = [{"name": "Arc Lead", "role": "Principal / Lead"}, {"name": "Slate Team", "role": "Client experience"}, {"name": "Signal Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Physiotherapy studio / Project A", "Physiotherapy studio / Project B", "Physiotherapy studio / Project C", "Physiotherapy studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Evidence-led rehabilitation with measurable milestones and practical home plans. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#447b56";
  return <main className="zp0039" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0039{--bg:#e8f0ea;--fg:#142319;--primary:#447b56;--primary-fg:#ffffff;--secondary:#b26a42;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:24px 4px 24px 4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:32px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0039 *{box-sizing:border-box}
.zp0039 a{color:inherit;text-decoration:none}
.zp0039 h1,.zp0039 h2,.zp0039 h3,.zp0039 blockquote{font-family:Century Gothic, Avenir, sans-serif;text-wrap:balance}
.zp0039 img{max-width:100%;display:block}
.zp0039 button,.zp0039 a{-webkit-tap-highlight-color:transparent}
.zp0039 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0039 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0039 .nav strong{font-family:Century Gothic, Avenir, sans-serif;font-size:18px}
.zp0039 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0039 .nav.index{display:grid;grid-template-columns:1fr auto 1fr}
.zp0039 .nav.index nav{justify-content:flex-end}
.zp0039 .mobileMenu{display:none}
.zp0039 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0039 .eyebrow,.zp0039 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0039 h1{font-size:clamp(48px,7.45vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0039 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0039 .minimalHero{display:block;min-height:74vh}
.zp0039 .minimalHero h1{font-size:clamp(58px,10vw,160px);max-width:13ch}
.zp0039 .minimalFoot{display:grid;grid-template-columns:1fr auto;gap:30px;align-items:end;margin-top:60px}
.zp0039 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0039 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0039 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0039 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0039 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0039 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0039 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0039 .serviceGrid p{color:var(--muted)}
.zp0039 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0039 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0039 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0039 details{border-top:1px solid var(--border);padding:20px 0}
.zp0039 details summary{font-weight:800;cursor:pointer}
.zp0039 details p{color:var(--muted);max-width:70ch}
.zp0039 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0039 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0039 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Century Gothic, Avenir, sans-serif;margin-bottom:18px}
.zp0039 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0039 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0039 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0039 .p1,.zp0039 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0039 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0039 .timeline article{padding:20px 0}
.zp0039 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0039 .researchRows{max-width:900px;margin-left:auto}
.zp0039 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0039 .contact .eyebrow{color:var(--bg)}
.zp0039 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0039 .contactMeta{display:grid;gap:10px}
.zp0039 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0039{background-image:repeating-linear-gradient(0deg,transparent 0 28px,color-mix(in srgb,var(--fg) 4%,transparent) 29px 30px)}
.zp0039 .section:nth-of-type(3n){transform:rotate(0.35deg)}
@keyframes enter-38{from{opacity:0;transform:translateY(36px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0039 .hero{min-height:auto}
.zp0039 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0039 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0039 .nav nav{display:none}
.zp0039 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0039 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0039 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0039 .mobileMenu nav a{padding:10px 8px}
.zp0039 .hero{grid-template-columns:1fr}
.zp0039 .section,.zp0039 .sectionTitle,.zp0039 .contact{grid-template-columns:1fr}
.zp0039 .teamGrid{grid-template-columns:1fr 1fr}
.zp0039 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0039 .section{display:block}}
@media(max-width:430px){.zp0039{font-size:16px}
.zp0039 .hero,.zp0039 .section,.zp0039 .contact{padding-left:18px;padding-right:18px}
.zp0039 .serviceGrid,.zp0039 .proof,.zp0039 .teamGrid,.zp0039 .collectionGrid{grid-template-columns:1fr}
.zp0039 h1{font-size:clamp(42px,14vw,70px)}
.zp0039 .minimalFoot{grid-template-columns:1fr}
.zp0039 .nav.index{grid-template-columns:1fr auto}
.zp0039 .nav.index>span{display:none}}

.zp0039 .heroActions a,.zp0039 .primary,.zp0039 .ctaBtn,.zp0039 .btnPrimary,.zp0039 .schedule>a,.zp0039 .newsletter>a{transition:all .2s ease}
.zp0039 .heroActions a:hover,.zp0039 .primary:hover,.zp0039 .ctaBtn:hover,.zp0039 .btnPrimary:hover{
  transform:rotate(2deg) scale(1.03)
}
.zp0039 nav a,.zp0039 .nav a,.zp0039 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0039 nav a:hover,.zp0039 .nav a:hover,.zp0039 .footer a:hover{
  color:var(--primary)
}
.zp0039 .serviceGrid article,.zp0039 .projectCard,.zp0039 .teamCard,.zp0039 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0039 .serviceGrid article:hover,.zp0039 .projectCard:hover,.zp0039 .teamCard:hover,.zp0039 .bentoCard:hover{
  transform:rotate(-1.5deg) scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0039 *,.zp0039 *::before,.zp0039 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0039 a,.zp0039 button,.zp0039 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav index"><strong>{businessName}</strong><span>Index 01—03</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero minimalHero"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><div className="minimalFoot"><p>{description}</p><a href="#contact">Send an enquiry</a></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Send an enquiry</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Scrapbook / story-first</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
