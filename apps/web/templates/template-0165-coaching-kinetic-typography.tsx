import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0165-coaching-kinetic-typography", "family": "Kinetic Typography", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "lower-third|testimonial-led|architectural-grid|case-study>services>awards>security>story>comparison>proof|ticket-edge|humanist-classic", "industry": "coaching", "hero": "testimonial-led", "navigation": "lower-third", "layout": "architectural-grid"};

export default function Template0165({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Aster Coaching Centre");
  const headline = String(content.headline || "Focused preparation with clear schedules, regular feedback, and measurable progress.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Exam preparation", "Weekly classes", "Mock tests", "Doubt sessions", "Progress reviews"];
  const industryLabel = "Coaching centre";
  const serviceNotes = ["Structured 90-day programmes with clear milestones reviewed together every fortnight.", "Evidence-based frameworks translated into practical, daily action steps.", "Accountability check-ins between sessions to maintain momentum.", "Access to tools, templates, and reading lists curated for your specific challenge.", "Progress documented so you can see exactly how far you've come."];
  const proofPoints = ["ICF certified coaches", "Money-back guarantee", "Video and in-person sessions", "Peer group included"];
  const storyQuote = "\u201cFocused preparation with clear schedules, regular feedback, and measurable progress.\u201d";
  const storyBody = "Aster Coaching Centre is presented as a real working coaching centre, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "I'd spent years knowing what I needed to do but not doing it. Having someone hold me to account changed everything.";
  const team = [{"name": "Common Lead", "role": "Principal / Lead"}, {"name": "Stillwater Team", "role": "Client experience"}, {"name": "Kite Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Coaching centre / Project A", "Coaching centre / Project B", "Coaching centre / Project C", "Coaching centre / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Focused preparation with clear schedules, regular feedback, and measurable progress. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e27d60";
  return <main className="zp0165" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0165{--bg:#fef7f1;--fg:#2c2320;--primary:#e27d60;--primary-fg:#050505;--secondary:#85a9a0;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:8px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:24px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0165 *{box-sizing:border-box}
.zp0165 a{color:inherit;text-decoration:none}
.zp0165 h1,.zp0165 h2,.zp0165 h3,.zp0165 blockquote{font-family:Baskerville, Georgia, serif;text-wrap:balance}
.zp0165 img{max-width:100%;display:block}
.zp0165 button,.zp0165 a{-webkit-tap-highlight-color:transparent}
.zp0165 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0165 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0165 .nav strong{font-family:Baskerville, Georgia, serif;font-size:18px}
.zp0165 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0165 .nav.lower{position:absolute;top:auto;bottom:0;width:100%;border-top:var(--line) solid var(--border)}
.zp0165 .mobileMenu{display:none}
.zp0165 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0165 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0165 .eyebrow,.zp0165 .sectionTitle>span,.zp0165 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0165 h1{font-size:clamp(48px,8.0vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0165 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0165 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0165 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0165 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0165 .quoteHero{grid-template-columns:1fr 1fr}
.zp0165 .quoteHero blockquote{font-size:clamp(36px,5vw,76px);line-height:.98;margin:0}
.zp0165 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0165 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0165 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0165 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0165 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0165 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0165 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0165 .serviceGrid p{color:var(--muted)}
.zp0165 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0165 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0165 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0165 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0165 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0165 .story p{color:var(--muted)}
.zp0165 details{border-top:1px solid var(--border);padding:20px 0}
.zp0165 details summary{font-weight:800;cursor:pointer}
.zp0165 details p{color:var(--muted);max-width:70ch}
.zp0165 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0165 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0165 .projects article:nth-child(2){transform:translateY(32px)}
.zp0165 .awards>div{max-width:800px;margin-left:auto}
.zp0165 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0165 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0165 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0165 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0165 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0165 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0165 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0165 .contact .eyebrow{color:var(--bg)}
.zp0165 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0165 .contactMeta{display:grid;gap:10px}
.zp0165 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0165 .heroCopy{animation:enter-164 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-164{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0165 .hero{min-height:auto}
.zp0165 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0165 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0165 .nav nav{display:none}
.zp0165 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0165 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0165 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0165 .mobileMenu nav a{padding:10px 8px}
.zp0165 .hero,.zp0165 .quoteHero{grid-template-columns:1fr}
.zp0165 .section,.zp0165 .sectionTitle,.zp0165 .story,.zp0165 .security,.zp0165 .contact{grid-template-columns:1fr}
.zp0165 .projects .projectGrid{grid-template-columns:1fr}
.zp0165 .projects article:nth-child(2){transform:none}
.zp0165 .section{display:block}}
@media(max-width:430px){.zp0165{font-size:16px}
.zp0165 .hero,.zp0165 .section,.zp0165 .contact{padding-left:18px;padding-right:18px}
.zp0165 .serviceGrid,.zp0165 .proof,.zp0165 .compareGrid{grid-template-columns:1fr}
.zp0165 h1{font-size:clamp(42px,14vw,70px)}}

.zp0165 .heroActions a,.zp0165 .primary,.zp0165 .ctaBtn,.zp0165 .btnPrimary,.zp0165 .schedule>a,.zp0165 .newsletter>a{transition:all .2s ease}
.zp0165 .heroActions a:hover,.zp0165 .primary:hover,.zp0165 .ctaBtn:hover,.zp0165 .btnPrimary:hover{
  transform:scale(1.04);letter-spacing:.06em
}
.zp0165 nav a,.zp0165 .nav a,.zp0165 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0165 nav a:hover,.zp0165 .nav a:hover,.zp0165 .footer a:hover{
  letter-spacing:.08em;color:var(--primary)
}
.zp0165 .serviceGrid article,.zp0165 .projectCard,.zp0165 .teamCard,.zp0165 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0165 .serviceGrid article:hover,.zp0165 .projectCard:hover,.zp0165 .teamCard:hover,.zp0165 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0165 *,.zp0165 *::before,.zp0165 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0165 a,.zp0165 button,.zp0165 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav lower"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero quoteHero"><blockquote>“Clear, thoughtful, and easy to work with.”</blockquote><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Send an enquiry</a><a href="#services">Explore</a></div></div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Send an enquiry</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Kinetic Typography / architectural-grid</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
