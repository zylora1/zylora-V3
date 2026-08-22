import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0822-community-experimental-typography", "family": "Experimental Typography", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "mega-utility|timeline-hero|portfolio-sequence|comparison>products>credentials>proof>services>story>hours|pill-controls|neo-grotesk", "industry": "community", "hero": "timeline-hero", "navigation": "mega-utility", "layout": "portfolio-sequence"};

export default function Template0822({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Mosaic Community Organization");
  const headline = String(content.headline || "A welcoming hub for people, events, shared resources, and practical participation.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Events", "Membership", "Directory", "Resources", "Volunteer"];
  const industryLabel = "Community organization";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const storyQuote = "\u201cA welcoming hub for people, events, shared resources, and practical participation.\u201d";
  const storyBody = "Mosaic Community Organization is presented as a real working community organization, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Foundry Lead", "role": "Principal / Lead"}, {"name": "Rook Team", "role": "Client experience"}, {"name": "Northline Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Community organization / Project A", "Community organization / Project B", "Community organization / Project C", "Community organization / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A welcoming hub for people, events, shared resources, and practical participation. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff7800";
  return <main className="zp0822" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0822{--bg:#101010;--fg:#f5f5f5;--primary:#ff7800;--primary-fg:#050505;--secondary:#f6d500;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:28px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:28px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0822 *{box-sizing:border-box}
.zp0822 a{color:inherit;text-decoration:none}
.zp0822 h1,.zp0822 h2,.zp0822 h3,.zp0822 blockquote{font-family:Helvetica Neue, Arial, sans-serif;text-wrap:balance}
.zp0822 img{max-width:100%;display:block}
.zp0822 button,.zp0822 a{-webkit-tap-highlight-color:transparent}
.zp0822 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0822 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0822 .nav strong{font-family:Helvetica Neue, Arial, sans-serif;font-size:18px}
.zp0822 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0822 .mobileMenu{display:none}
.zp0822 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0822 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0822 .eyebrow,.zp0822 .sectionTitle>span,.zp0822 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0822 h1{font-size:clamp(48px,6.35vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0822 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0822 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0822 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0822 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0822 .timelineHero{grid-template-columns:.4fr 1.6fr}
.zp0822 .timelineLine{display:flex;flex-direction:column;justify-content:space-between;height:60vh;border-left:2px solid var(--primary);padding-left:18px}
.zp0822 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0822 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0822 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0822 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0822 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0822 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0822 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0822 .serviceGrid p{color:var(--muted)}
.zp0822 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0822 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0822 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0822 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0822 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0822 .story p{color:var(--muted)}
.zp0822 details{border-top:1px solid var(--border);padding:20px 0}
.zp0822 details summary{font-weight:800;cursor:pointer}
.zp0822 details p{color:var(--muted);max-width:70ch}
.zp0822 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0822 .hours dl{margin:0}
.zp0822 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0822 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0822 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0822 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0822 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0822 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0822 .p1,.zp0822 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0822 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0822 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0822 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0822 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0822 .contact .eyebrow{color:var(--bg)}
.zp0822 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0822 .contactMeta{display:grid;gap:10px}
.zp0822 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0822 .heroCopy{animation:enter-821 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-821{from{opacity:0;transform:translateY(19px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0822 .hero{min-height:auto}
.zp0822 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0822 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0822 .nav nav{display:none}
.zp0822 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0822 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0822 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0822 .mobileMenu nav a{padding:10px 8px}
.zp0822 .hero,.zp0822 .timelineHero{grid-template-columns:1fr}
.zp0822 .section,.zp0822 .sectionTitle,.zp0822 .story,.zp0822 .hours,.zp0822 .contact{grid-template-columns:1fr}
.zp0822 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0822 .section{display:block}}
@media(max-width:430px){.zp0822{font-size:16px}
.zp0822 .hero,.zp0822 .section,.zp0822 .contact{padding-left:18px;padding-right:18px}
.zp0822 .serviceGrid,.zp0822 .proof,.zp0822 .collectionGrid,.zp0822 .compareGrid{grid-template-columns:1fr}
.zp0822 h1{font-size:clamp(42px,14vw,70px)}}

.zp0822 .heroActions a,.zp0822 .primary,.zp0822 .ctaBtn,.zp0822 .btnPrimary,.zp0822 .schedule>a,.zp0822 .newsletter>a{transition:all .2s ease}
.zp0822 .heroActions a:hover,.zp0822 .primary:hover,.zp0822 .ctaBtn:hover,.zp0822 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0822 nav a,.zp0822 .nav a,.zp0822 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0822 nav a:hover,.zp0822 .nav a:hover,.zp0822 .footer a:hover{
  letter-spacing:.12em
}
.zp0822 .serviceGrid article,.zp0822 .projectCard,.zp0822 .teamCard,.zp0822 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0822 .serviceGrid article:hover,.zp0822 .projectCard:hover,.zp0822 .teamCard:hover,.zp0822 .bentoCard:hover{
  transform:skewX(-2deg)
}
@media(prefers-reduced-motion:reduce){.zp0822 *,.zp0822 *::before,.zp0822 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0822 a,.zp0822 button,.zp0822 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav utility"><strong>{businessName}</strong><span>Open today</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero timelineHero"><div className="timelineLine"><span>Start</span><span>Today</span><span>Next</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">View selected work</a><a href="#services">Explore</a></div></div></section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>View selected work</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Experimental Typography / portfolio-sequence</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
