import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0357-construction-museum-gallery", "family": "Museum Gallery", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "lower-third|testimonial-led|split-scroll|community>comparison>programmes>services>proof>gallery>case-study|ticket-edge|humanist-classic", "industry": "construction", "hero": "testimonial-led", "navigation": "lower-third", "layout": "split-scroll"};

export default function Template0357({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Aster Construction Company");
  const headline = String(content.headline || "Reliable construction with visible schedules, accountable budgets, and clean handovers.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["General contracting", "Renovations", "Commercial build-outs", "Pre-construction", "Project management"];
  const industryLabel = "Construction company";
  const serviceNotes = ["Design-and-build capability: architecture, engineering, and delivery from one team.", "Fixed-price contracts with a 5% contingency reserve — no hidden variations.", "Health and safety management with a dedicated site manager on every project.", "Structural engineer and quantity surveyor in-house, not outsourced.", "10-year structural guarantee with build defects insurance included."];
  const proofPoints = ["FMB member", "ISO 9001 certified", "10-year structural guarantee", "£5M public liability"];
  const storyBody = "Aster Construction Company is presented as a real working construction company, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "On budget, four days ahead of programme. The site manager communicated daily — never felt in the dark about anything.";
  const team = [{"name": "Common Lead", "role": "Principal / Lead"}, {"name": "Stillwater Team", "role": "Client experience"}, {"name": "Kite Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Construction company / Project A", "Construction company / Project B", "Construction company / Project C", "Construction company / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Reliable construction with visible schedules, accountable budgets, and clean handovers. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#f06d3b";
  return <main className="zp0357" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0357{--bg:#fff8ef;--fg:#2e251f;--primary:#f06d3b;--primary-fg:#050505;--secondary:#e1b355;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:8px;--line:0px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:24px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0357 *{box-sizing:border-box}
.zp0357 a{color:inherit;text-decoration:none}
.zp0357 h1,.zp0357 h2,.zp0357 h3,.zp0357 blockquote{font-family:Baskerville, Georgia, serif;text-wrap:balance}
.zp0357 img{max-width:100%;display:block}
.zp0357 button,.zp0357 a{-webkit-tap-highlight-color:transparent}
.zp0357 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0357 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0357 .nav strong{font-family:Baskerville, Georgia, serif;font-size:18px}
.zp0357 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0357 .nav.lower{position:absolute;top:auto;bottom:0;width:100%;border-top:var(--line) solid var(--border)}
.zp0357 .mobileMenu{display:none}
.zp0357 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0357 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0357 .eyebrow,.zp0357 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0357 h1{font-size:clamp(48px,6.35vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0357 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0357 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0357 .heroActions a,.zp0357 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0357 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0357 .quoteHero{grid-template-columns:1fr 1fr}
.zp0357 .quoteHero blockquote{font-size:clamp(36px,5vw,76px);line-height:.98;margin:0}
.zp0357 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0357 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0357 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0357 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0357 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0357 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0357 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0357 .serviceGrid p{color:var(--muted)}
.zp0357 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0357 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0357 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0357 details{border-top:1px solid var(--border);padding:20px 0}
.zp0357 details summary{font-weight:800;cursor:pointer}
.zp0357 details p{color:var(--muted);max-width:70ch}
.zp0357 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0357 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0357 .galleryGrid>*:first-child{grid-row:1/3}
.zp0357 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0357 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0357 .g2,.zp0357 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0357 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0357 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0357 .projects article:nth-child(2){transform:translateY(32px)}
.zp0357 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0357 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0357 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0357 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0357 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0357 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0357 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0357 .contact .eyebrow{color:var(--bg)}
.zp0357 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0357 .contactMeta{display:grid;gap:10px}
.zp0357 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0357 .heroCopy{animation:enter-356 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-356{from{opacity:0;transform:translateY(34px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0357 .hero{min-height:auto}
.zp0357 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0357 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0357 .nav nav{display:none}
.zp0357 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0357 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0357 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0357 .mobileMenu nav a{padding:10px 8px}
.zp0357 .hero,.zp0357 .quoteHero{grid-template-columns:1fr}
.zp0357 .section,.zp0357 .sectionTitle,.zp0357 .contact{grid-template-columns:1fr}
.zp0357 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0357 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0357 .projects .projectGrid{grid-template-columns:1fr}
.zp0357 .projects article:nth-child(2){transform:none}
.zp0357 .section{display:block}}
@media(max-width:430px){.zp0357{font-size:16px}
.zp0357 .hero,.zp0357 .section,.zp0357 .contact{padding-left:18px;padding-right:18px}
.zp0357 .serviceGrid,.zp0357 .proof,.zp0357 .programmes>div:last-child,.zp0357 .compareGrid{grid-template-columns:1fr}
.zp0357 h1{font-size:clamp(42px,14vw,70px)}
.zp0357 .galleryGrid{grid-template-columns:1fr}
.zp0357 .galleryGrid>*:first-child{grid-column:auto}}

.zp0357 .heroActions a,.zp0357 .primary,.zp0357 .ctaBtn,.zp0357 .btnPrimary,.zp0357 .schedule>a,.zp0357 .newsletter>a{transition:all .2s ease}
.zp0357 .heroActions a:hover,.zp0357 .primary:hover,.zp0357 .ctaBtn:hover,.zp0357 .btnPrimary:hover{
  opacity:.85;letter-spacing:.06em
}
.zp0357 nav a,.zp0357 .nav a,.zp0357 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0357 nav a:hover,.zp0357 .nav a:hover,.zp0357 .footer a:hover{
  opacity:.7
}
.zp0357 .serviceGrid article,.zp0357 .projectCard,.zp0357 .teamCard,.zp0357 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0357 .serviceGrid article:hover,.zp0357 .projectCard:hover,.zp0357 .teamCard:hover,.zp0357 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0357 *,.zp0357 *::before,.zp0357 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0357 a,.zp0357 button,.zp0357 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav lower"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero quoteHero"><blockquote>“Clear, thoughtful, and easy to work with.”</blockquote><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Join the community</a><a href="#services">Explore</a></div></div></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Join the community</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Museum Gallery / split-scroll</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
