import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0522-cybersecurity-hand-drawn", "family": "Hand-drawn", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "left-sidebar|service-led|modular-12|destinations>proof>services>newsletter>hours>comparison>credentials|paper-sheet|utility", "industry": "cybersecurity", "hero": "service-led", "navigation": "left-sidebar", "layout": "modular-12"};

export default function Template0522({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Arc Cybersecurity Firm");
  const headline = String(content.headline || "Practical security that reduces exposure without slowing the business down.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Security assessments", "Managed detection", "Incident response", "Cloud security", "Compliance"];
  const industryLabel = "Cybersecurity firm";
  const serviceNotes = ["Penetration testing on infrastructure, web applications, and physical security.", "Incident response retainer: guaranteed 2h response, 24h containment commitment.", "Security awareness training delivered in-person and via self-paced modules.", "ISO 27001, Cyber Essentials, and SOC 2 readiness programmes end-to-end.", "Red team exercises that simulate advanced persistent threats realistically."];
  const proofPoints = ["CREST certified testers", "Incident response 24/7", "ISO 27001 certified", "CHECK approved"];
  const testimonial = "They found a critical vulnerability our previous pen test missed. The report was actionable, not just a list of CVEs.";
  const team = [{"name": "Civic Lead", "role": "Principal / Lead"}, {"name": "Oak & Tide Team", "role": "Client experience"}, {"name": "Studio Nine Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Cybersecurity firm / Project A", "Cybersecurity firm / Project B", "Cybersecurity firm / Project C", "Cybersecurity firm / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Practical security that reduces exposure without slowing the business down. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#7d5a3d";
  return <main className="zp0522" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0522{--bg:#f7f2ea;--fg:#1f1d1a;--primary:#7d5a3d;--primary-fg:#ffffff;--secondary:#b77d5e;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:3px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:28px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0522 *{box-sizing:border-box}
.zp0522 a{color:inherit;text-decoration:none}
.zp0522 h1,.zp0522 h2,.zp0522 h3,.zp0522 blockquote{font-family:Verdana, sans-serif;text-wrap:balance}
.zp0522 img{max-width:100%;display:block}
.zp0522 button,.zp0522 a{-webkit-tap-highlight-color:transparent}
.zp0522 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0522 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0522 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0522 .mobileMenu{display:none}
.zp0522:has(.navRail)>.hero,.zp0522:has(.navRail)>.section,.zp0522:has(.navRail)>.contact,.zp0522:has(.navRail)>.footer{margin-left:190px}
.zp0522 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0522 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0522 .eyebrow,.zp0522 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0522 h1{font-size:clamp(48px,6.35vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0522 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0522 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0522 .heroActions a,.zp0522 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0522 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0522 .serviceHero{grid-template-columns:.65fr 1.35fr}
.zp0522 .serviceHeroList{display:grid;gap:4px}
.zp0522 .serviceHeroList span{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0522 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0522 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0522 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0522 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0522 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0522 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0522 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0522 .serviceGrid p{color:var(--muted)}
.zp0522 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0522 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0522 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0522 details{border-top:1px solid var(--border);padding:20px 0}
.zp0522 details summary{font-weight:800;cursor:pointer}
.zp0522 details p{color:var(--muted);max-width:70ch}
.zp0522 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0522 .hours dl{margin:0}
.zp0522 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0522 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0522 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0522 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0522 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0522 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0522 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0522 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0522 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0522 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0522 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0522 .contact .eyebrow{color:var(--bg)}
.zp0522 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0522 .contactMeta{display:grid;gap:10px}
.zp0522 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0522 .heroCopy{animation:enter-521 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-521{from{opacity:0;transform:translateY(19px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0522 .hero{min-height:auto}
.zp0522 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0522 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0522 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0522 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0522 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0522 .mobileMenu nav a{padding:10px 8px}
.zp0522 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0522:has(.navRail)>.hero,.zp0522:has(.navRail)>.section,.zp0522:has(.navRail)>.contact,.zp0522:has(.navRail)>.footer{margin-left:0}
.zp0522 .hero,.zp0522 .serviceHero{grid-template-columns:1fr}
.zp0522 .section,.zp0522 .sectionTitle,.zp0522 .hours,.zp0522 .contact{grid-template-columns:1fr}
.zp0522 .section{display:block}}
@media(max-width:430px){.zp0522{font-size:16px}
.zp0522 .hero,.zp0522 .section,.zp0522 .contact{padding-left:18px;padding-right:18px}
.zp0522 .serviceGrid,.zp0522 .proof,.zp0522 .destinations>div:last-child,.zp0522 .compareGrid{grid-template-columns:1fr}
.zp0522 h1{font-size:clamp(42px,14vw,70px)}}

.zp0522 .heroActions a,.zp0522 .primary,.zp0522 .ctaBtn,.zp0522 .btnPrimary,.zp0522 .schedule>a,.zp0522 .newsletter>a{transition:all .2s ease}
.zp0522 .heroActions a:hover,.zp0522 .primary:hover,.zp0522 .ctaBtn:hover,.zp0522 .btnPrimary:hover{
  opacity:.8;text-decoration:underline wavy
}
.zp0522 nav a,.zp0522 .nav a,.zp0522 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0522 nav a:hover,.zp0522 .nav a:hover,.zp0522 .footer a:hover{
  opacity:.7
}
.zp0522 .serviceGrid article,.zp0522 .projectCard,.zp0522 .teamCard,.zp0522 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0522 .serviceGrid article:hover,.zp0522 .projectCard:hover,.zp0522 .teamCard:hover,.zp0522 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0522 *,.zp0522 *::before,.zp0522 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0522 a,.zp0522 button,.zp0522 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero serviceHero"><div className="serviceHeroList">{services.slice(0,4).map((s,i)=><span key={s}>{String(i+1).padStart(2,"0")} — {s}</span>)}</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a demo</a><a href="#services">Explore</a></div></div></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a demo</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Hand-drawn / modular-12</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
