import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0375-legal-oversized-typography", "family": "Oversized Typography", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "editorial-index|index-led|product-journey|proof>press>services>newsletter>hours>location>comparison|asymmetric-radius|geometric", "industry": "legal", "hero": "index-led", "navigation": "editorial-index", "layout": "product-journey"};

export default function Template0375({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Foxglove Law Firm");
  const headline = String(content.headline || "Practical legal advice, clear next steps, and responsive communication.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Business law", "Dispute resolution", "Property law", "Employment", "Estate planning"];
  const industryLabel = "Law firm";
  const serviceNotes = ["Fixed-fee options for defined scope matters — clear costs before we begin.", "24h response guarantee on all client communications, not just weekdays.", "Plain-English advice: we translate legal complexity into decisions you can make.", "Video and in-person consultation options across all practice areas.", "Regular matter updates so you're never left wondering where things stand."];
  const proofPoints = ["SRA regulated", "Lexcel accredited", "Legal 500 listed", "No win no fee options"];
  const testimonial = "My solicitor explained everything in plain terms and never made me feel like a question was too basic. That's rare.";
  const team = [{"name": "Kindred Lead", "role": "Principal / Lead"}, {"name": "Tandem Team", "role": "Client experience"}, {"name": "Morrow Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Law firm / Project A", "Law firm / Project B", "Law firm / Project C", "Law firm / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Practical legal advice, clear next steps, and responsive communication. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#b7ff31";
  return <main className="zp0375" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0375{--bg:#f2f2f2;--fg:#111111;--primary:#b7ff31;--primary-fg:#050505;--secondary:#808080;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:24px 4px 24px 4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:32px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0375 *{box-sizing:border-box}
.zp0375 a{color:inherit;text-decoration:none}
.zp0375 h1,.zp0375 h2,.zp0375 h3,.zp0375 blockquote{font-family:Century Gothic, Avenir, sans-serif;text-wrap:balance}
.zp0375 img{max-width:100%;display:block}
.zp0375 button,.zp0375 a{-webkit-tap-highlight-color:transparent}
.zp0375 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0375 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0375 .nav strong{font-family:Century Gothic, Avenir, sans-serif;font-size:18px}
.zp0375 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0375 .nav.index{display:grid;grid-template-columns:1fr auto 1fr}
.zp0375 .nav.index nav{justify-content:flex-end}
.zp0375 .mobileMenu{display:none}
.zp0375 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0375 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0375 .eyebrow,.zp0375 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0375 h1{font-size:clamp(48px,8.0vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0375 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0375 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0375 .heroActions a,.zp0375 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0375 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0375 .indexHero{grid-template-columns:.6fr 1.4fr}
.zp0375 .indexHero ol{list-style:none;margin:0;padding:0}
.zp0375 .indexHero li{font:700 18px/1.2 Century Gothic, Avenir, sans-serif;padding:18px 0;border-bottom:1px solid var(--border)}
.zp0375 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0375 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0375 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0375 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0375 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0375 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0375 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0375 .serviceGrid p{color:var(--muted)}
.zp0375 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0375 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0375 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0375 details{border-top:1px solid var(--border);padding:20px 0}
.zp0375 details summary{font-weight:800;cursor:pointer}
.zp0375 details p{color:var(--muted);max-width:70ch}
.zp0375 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0375 .hours dl{margin:0}
.zp0375 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0375 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0375 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0375 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0375 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0375 .awards>div{max-width:800px;margin-left:auto}
.zp0375 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0375 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0375 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0375 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0375 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0375 .contact .eyebrow{color:var(--bg)}
.zp0375 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0375 .contactMeta{display:grid;gap:10px}
.zp0375 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0375 .heroCopy{animation:enter-374 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-374{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0375 .hero{min-height:auto}
.zp0375 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0375 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0375 .nav nav{display:none}
.zp0375 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0375 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0375 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0375 .mobileMenu nav a{padding:10px 8px}
.zp0375 .hero,.zp0375 .indexHero{grid-template-columns:1fr}
.zp0375 .section,.zp0375 .sectionTitle,.zp0375 .hours,.zp0375 .location,.zp0375 .contact{grid-template-columns:1fr}
.zp0375 .section{display:block}}
@media(max-width:430px){.zp0375{font-size:16px}
.zp0375 .hero,.zp0375 .section,.zp0375 .contact{padding-left:18px;padding-right:18px}
.zp0375 .serviceGrid,.zp0375 .proof,.zp0375 .compareGrid{grid-template-columns:1fr}
.zp0375 h1{font-size:clamp(42px,14vw,70px)}
.zp0375 .nav.index{grid-template-columns:1fr auto}
.zp0375 .nav.index>span{display:none}}

.zp0375 .heroActions a,.zp0375 .primary,.zp0375 .ctaBtn,.zp0375 .btnPrimary,.zp0375 .schedule>a,.zp0375 .newsletter>a{transition:all .2s ease}
.zp0375 .heroActions a:hover,.zp0375 .primary:hover,.zp0375 .ctaBtn:hover,.zp0375 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0375 nav a,.zp0375 .nav a,.zp0375 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0375 nav a:hover,.zp0375 .nav a:hover,.zp0375 .footer a:hover{
  color:var(--primary)
}
.zp0375 .serviceGrid article,.zp0375 .projectCard,.zp0375 .teamCard,.zp0375 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0375 .serviceGrid article:hover,.zp0375 .projectCard:hover,.zp0375 .teamCard:hover,.zp0375 .bentoCard:hover{
  opacity:.88
}
@media(prefers-reduced-motion:reduce){.zp0375 *,.zp0375 *::before,.zp0375 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0375 a,.zp0375 button,.zp0375 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav index"><strong>{businessName}</strong><span>Index 01—03</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero indexHero"><ol><li>{services[0]}</li><li>{services[1]}</li><li>{services[2]}</li></ol><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Send an enquiry</a><a href="#services">Explore</a></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Send an enquiry</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Oversized Typography / product-journey</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
