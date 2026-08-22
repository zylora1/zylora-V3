import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0460-agency-typographic-poster", "family": "Typographic Poster", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "minimal-wordmark|navigation-led|research-led|proof>case-study>newsletter>materials>services|notched|sports-editorial", "industry": "agency", "hero": "navigation-led", "navigation": "minimal-wordmark", "layout": "research-led"};

export default function Template0460({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Stillwater Creative Agency");
  const headline = String(content.headline || "Sharp strategy and distinctive creative work built to earn attention and action.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Brand strategy", "Web design", "Campaigns", "Content", "Production"];
  const industryLabel = "Creative agency";
  const serviceNotes = ["Strategy-led creative: we understand your market before designing anything.", "Integrated teams — strategy, design, and engineering in the same room.", "Brand systems that work across print, digital, and environmental without being rigid.", "Campaign measurement built in: we track outcomes, not just outputs.", "Retained partnerships with monthly delivery and quarterly direction reviews."];
  const proofPoints = ["D&AD and Cannes Lions awarded", "Average client tenure: 4.2 years", "ISO 27001 data security", "ISBA member"];
  const testimonial = "They killed our first concept because it wouldn't work — then delivered something far better. That's what a good agency does.";
  const team = [{"name": "Miller & Rowe Lead", "role": "Principal / Lead"}, {"name": "Stone & Pine Team", "role": "Client experience"}, {"name": "Foxglove Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Creative agency / Project A", "Creative agency / Project B", "Creative agency / Project C", "Creative agency / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Sharp strategy and distinctive creative work built to earn attention and action. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#8d66ff";
  return <main className="zp0460" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0460{--bg:#f8f3ff;--fg:#181122;--primary:#8d66ff;--primary-fg:#050505;--secondary:#f39cd8;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:3px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:36px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0460 *{box-sizing:border-box}
.zp0460 a{color:inherit;text-decoration:none}
.zp0460 h1,.zp0460 h2,.zp0460 h3,.zp0460 blockquote{font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;text-wrap:balance}
.zp0460 img{max-width:100%;display:block}
.zp0460 button,.zp0460 a{-webkit-tap-highlight-color:transparent}
.zp0460 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0460 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0460 .nav strong{font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;font-size:18px}
.zp0460 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0460 .mobileMenu{display:none}
.zp0460 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0460 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0460 .eyebrow,.zp0460 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0460 h1{font-size:clamp(48px,8.0vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0460 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0460 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0460 .heroActions a,.zp0460 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0460 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0460 .navLedHero{grid-template-columns:.35fr 1.65fr}
.zp0460 .navLedIndex{display:grid;gap:18px;align-self:start}
.zp0460 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0460 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0460 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0460 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0460 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0460 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0460 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0460 .serviceGrid p{color:var(--muted)}
.zp0460 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0460 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0460 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0460 details{border-top:1px solid var(--border);padding:20px 0}
.zp0460 details summary{font-weight:800;cursor:pointer}
.zp0460 details p{color:var(--muted);max-width:70ch}
.zp0460 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0460 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0460 .projects article:nth-child(2){transform:translateY(32px)}
.zp0460 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0460 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0460 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0460 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0460 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0460 .contact .eyebrow{color:var(--bg)}
.zp0460 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0460 .contactMeta{display:grid;gap:10px}
.zp0460 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0460 .heroCopy{animation:enter-459 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-459{from{opacity:0;transform:translateY(37px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0460 .hero{min-height:auto}
.zp0460 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0460 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0460 .nav nav{display:none}
.zp0460 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0460 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0460 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0460 .mobileMenu nav a{padding:10px 8px}
.zp0460 .hero,.zp0460 .navLedHero{grid-template-columns:1fr}
.zp0460 .section,.zp0460 .sectionTitle,.zp0460 .contact{grid-template-columns:1fr}
.zp0460 .projects .projectGrid{grid-template-columns:1fr}
.zp0460 .projects article:nth-child(2){transform:none}
.zp0460 .section{display:block}}
@media(max-width:430px){.zp0460{font-size:16px}
.zp0460 .hero,.zp0460 .section,.zp0460 .contact{padding-left:18px;padding-right:18px}
.zp0460 .serviceGrid,.zp0460 .proof{grid-template-columns:1fr}
.zp0460 h1{font-size:clamp(42px,14vw,70px)}}

.zp0460 .heroActions a,.zp0460 .primary,.zp0460 .ctaBtn,.zp0460 .btnPrimary,.zp0460 .schedule>a,.zp0460 .newsletter>a{transition:all .2s ease}
.zp0460 .heroActions a:hover,.zp0460 .primary:hover,.zp0460 .ctaBtn:hover,.zp0460 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0460 nav a,.zp0460 .nav a,.zp0460 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0460 nav a:hover,.zp0460 .nav a:hover,.zp0460 .footer a:hover{
  color:var(--primary)
}
.zp0460 .serviceGrid article,.zp0460 .projectCard,.zp0460 .teamCard,.zp0460 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0460 .serviceGrid article:hover,.zp0460 .projectCard:hover,.zp0460 .teamCard:hover,.zp0460 .bentoCard:hover{
  background:var(--surface)
}
@media(prefers-reduced-motion:reduce){.zp0460 *,.zp0460 *::before,.zp0460 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0460 a,.zp0460 button,.zp0460 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav minimal"><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero navLedHero"><div className="navLedIndex"><a href="#services">Services</a><a href="#proof">Approach</a><a href="#contact">Contact</a></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a quote</a><a href="#services">Explore</a></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a quote</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Typographic Poster / research-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
