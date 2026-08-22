import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0808-nonprofit-collage", "family": "Collage", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "corner-dock|monumental-type|single-column-longform|case-study>proof>credentials>comparison>services|micro-radius|brutal-display", "industry": "nonprofit", "hero": "monumental-type", "navigation": "corner-dock", "layout": "single-column-longform"};

export default function Template0808({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Common Nonprofit");
  const headline = String(content.headline || "A clear case for action, transparent impact, and simple ways to participate or give.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Programmes", "Impact", "Volunteer", "Donate", "Resources"];
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Juniper Lead", "role": "Principal / Lead"}, {"name": "Miller & Rowe Team", "role": "Client experience"}, {"name": "Stone & Pine Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Nonprofit / Project A", "Nonprofit / Project B", "Nonprofit / Project C", "Nonprofit / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A clear case for action, transparent impact, and simple ways to participate or give. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ffffff";
  return <main className="zp0808" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0808{--bg:#060606;--fg:#f7f7f2;--primary:#ffffff;--primary-fg:#050505;--secondary:#8d8d8d;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:36px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0808 *{box-sizing:border-box}
.zp0808 a{color:inherit;text-decoration:none}
.zp0808 h1,.zp0808 h2,.zp0808 h3,.zp0808 blockquote{font-family:Arial Black, Arial, sans-serif;text-wrap:balance}
.zp0808 img{max-width:100%;display:block}
.zp0808 button,.zp0808 a{-webkit-tap-highlight-color:transparent}
.zp0808 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0808 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0808 .nav strong{font-family:Arial Black, Arial, sans-serif;font-size:18px}
.zp0808 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0808 .mobileMenu{display:none}
.zp0808 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0808 .eyebrow,.zp0808 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0808 h1{font-size:clamp(48px,6.9vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0808 .monumentalHero{display:block}
.zp0808 .monumentalHero h1{font-size:clamp(74px,16vw,250px);max-width:none;word-break:break-word}
.zp0808 .monumentalBody{display:grid;grid-template-columns:1fr auto;gap:30px;border-top:1px solid var(--border);padding-top:22px}
.zp0808 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0808 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0808 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0808 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0808 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0808 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0808 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0808 .serviceGrid p{color:var(--muted)}
.zp0808 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0808 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0808 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0808 details{border-top:1px solid var(--border);padding:20px 0}
.zp0808 details summary{font-weight:800;cursor:pointer}
.zp0808 details p{color:var(--muted);max-width:70ch}
.zp0808 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0808 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0808 .projects article:nth-child(2){transform:translateY(32px)}
.zp0808 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0808 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0808 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0808 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0808 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0808 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0808 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0808 .contact .eyebrow{color:var(--bg)}
.zp0808 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0808 .contactMeta{display:grid;gap:10px}
.zp0808 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0808 .section>*{max-width:820px;margin-left:auto;margin-right:auto}
.zp0808 .sectionTitle{display:block}
.zp0808{background-image:repeating-linear-gradient(0deg,transparent 0 28px,color-mix(in srgb,var(--fg) 4%,transparent) 29px 30px)}
.zp0808 .section:nth-of-type(3n){transform:rotate(-0.35deg)}
@keyframes enter-807{from{opacity:0;transform:translateY(25px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0808 .hero{min-height:auto}
.zp0808 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0808 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0808 .nav nav{display:none}
.zp0808 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0808 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0808 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0808 .mobileMenu nav a{padding:10px 8px}
.zp0808 .hero{grid-template-columns:1fr}
.zp0808 .section,.zp0808 .sectionTitle,.zp0808 .contact{grid-template-columns:1fr}
.zp0808 .projects .projectGrid{grid-template-columns:1fr}
.zp0808 .projects article:nth-child(2){transform:none}
.zp0808 .section{display:block}}
@media(max-width:430px){.zp0808{font-size:16px}
.zp0808 .hero,.zp0808 .section,.zp0808 .contact{padding-left:18px;padding-right:18px}
.zp0808 .serviceGrid,.zp0808 .proof,.zp0808 .compareGrid{grid-template-columns:1fr}
.zp0808 h1{font-size:clamp(42px,14vw,70px)}
.zp0808 .monumentalHero h1{font-size:clamp(58px,19vw,100px)}
.zp0808 .monumentalBody{grid-template-columns:1fr}}

.zp0808 .heroActions a,.zp0808 .primary,.zp0808 .ctaBtn,.zp0808 .btnPrimary,.zp0808 .schedule>a,.zp0808 .newsletter>a{transition:all .2s ease}
.zp0808 .heroActions a:hover,.zp0808 .primary:hover,.zp0808 .ctaBtn:hover,.zp0808 .btnPrimary:hover{
  transform:rotate(1deg) scale(1.02)
}
.zp0808 nav a,.zp0808 .nav a,.zp0808 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0808 nav a:hover,.zp0808 .nav a:hover,.zp0808 .footer a:hover{
  color:var(--primary)
}
.zp0808 .serviceGrid article,.zp0808 .projectCard,.zp0808 .teamCard,.zp0808 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0808 .serviceGrid article:hover,.zp0808 .projectCard:hover,.zp0808 .teamCard:hover,.zp0808 .bentoCard:hover{
  transform:rotate(-1deg) scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0808 *,.zp0808 *::before,.zp0808 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0808 a,.zp0808 button,.zp0808 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav dock"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero monumentalHero"><h1>{businessName}</h1><div className="monumentalBody"><p>{headline}</p><a href="#contact">View selected work</a></div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>View selected work</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Collage / single-column-longform</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
