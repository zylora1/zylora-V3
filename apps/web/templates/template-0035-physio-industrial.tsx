import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0035-physio-industrial", "family": "Industrial", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "split-logo|diagonal-cut|asymmetric-5-7|projects>comparison>proof>process>services>values|inset-panel|editorial-serif", "industry": "physio", "hero": "diagonal-cut", "navigation": "split-logo", "layout": "asymmetric-5-7"};

export default function Template0035({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Harbor Physiotherapy Studio");
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
  const testimonial = "Back on the pitch in 8 weeks after my ACL — the rehab plan was specific to my sport, not generic advice.";
  const team = [{"name": "Cedar Lead", "role": "Principal / Lead"}, {"name": "Arc Team", "role": "Client experience"}, {"name": "Slate Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Physiotherapy studio / Project A", "Physiotherapy studio / Project B", "Physiotherapy studio / Project C", "Physiotherapy studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Evidence-led rehabilitation with measurable milestones and practical home plans. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ad7a45";
  return <main className="zp0035" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0035{--bg:#f8f2e8;--fg:#2e2723;--primary:#ad7a45;--primary-fg:#050505;--secondary:#716b56;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:16px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:32px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0035 *{box-sizing:border-box}
.zp0035 a{color:inherit;text-decoration:none}
.zp0035 h1,.zp0035 h2,.zp0035 h3,.zp0035 blockquote{font-family:Georgia, serif;text-wrap:balance}
.zp0035 img{max-width:100%;display:block}
.zp0035 button,.zp0035 a{-webkit-tap-highlight-color:transparent}
.zp0035 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0035 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0035 .nav strong{font-family:Georgia, serif;font-size:18px}
.zp0035 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0035 .mobileMenu{display:none}
.zp0035 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0035 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0035 .eyebrow,.zp0035 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0035 h1{font-size:clamp(48px,8.0vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0035 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0035 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0035 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0035 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0035 .visual,.zp0035 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0035 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0035 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:16px;right:-8%;top:-18%;transform:rotate(12deg)}
.zp0035 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0035 .heroPhoto{object-fit:cover}
.zp0035 .diagonalHero{grid-template-columns:1.15fr .85fr}
.zp0035 .diagonalVisual{clip-path:polygon(22% 0,100% 0,78% 100%,0 100%)}
.zp0035 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0035 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0035 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0035 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0035 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0035 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0035 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0035 .serviceGrid p{color:var(--muted)}
.zp0035 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0035 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0035 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0035 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0035 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0035 details{border-top:1px solid var(--border);padding:20px 0}
.zp0035 details summary{font-weight:800;cursor:pointer}
.zp0035 details p{color:var(--muted);max-width:70ch}
.zp0035 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0035 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0035 .projects article:nth-child(2){transform:translateY(32px)}
.zp0035 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Georgia, serif;letter-spacing:-.04em;max-width:17ch}
.zp0035 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0035 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0035 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0035 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0035 .contact .eyebrow{color:var(--bg)}
.zp0035 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0035 .contactMeta{display:grid;gap:10px}
.zp0035 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0035 .section:nth-of-type(odd){padding-left:max(24px,calc((100vw - var(--max))/2 + 7vw))}
.zp0035 .heroCopy{animation:enter-34 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-34{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0035 .hero{min-height:auto}
.zp0035 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0035 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0035 .nav nav{display:none}
.zp0035 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0035 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0035 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0035 .mobileMenu nav a{padding:10px 8px}
.zp0035 .hero,.zp0035 .diagonalHero{grid-template-columns:1fr}
.zp0035 .section,.zp0035 .sectionTitle,.zp0035 .contact{grid-template-columns:1fr}
.zp0035 .projects .projectGrid{grid-template-columns:1fr}
.zp0035 .projects article:nth-child(2){transform:none}
.zp0035 .section{display:block}}
@media(max-width:430px){.zp0035{font-size:16px}
.zp0035 .hero,.zp0035 .section,.zp0035 .contact{padding-left:18px;padding-right:18px}
.zp0035 .serviceGrid,.zp0035 .proof,.zp0035 .compareGrid{grid-template-columns:1fr}
.zp0035 h1{font-size:clamp(42px,14vw,70px)}}

.zp0035 .heroActions a,.zp0035 .primary,.zp0035 .ctaBtn,.zp0035 .btnPrimary,.zp0035 .schedule>a,.zp0035 .newsletter>a{transition:all .2s ease}
.zp0035 .heroActions a:hover,.zp0035 .primary:hover,.zp0035 .ctaBtn:hover,.zp0035 .btnPrimary:hover{
  background:var(--fg);color:var(--bg);border-radius:0
}
.zp0035 nav a,.zp0035 .nav a,.zp0035 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0035 nav a:hover,.zp0035 .nav a:hover,.zp0035 .footer a:hover{
  color:var(--primary)
}
.zp0035 .serviceGrid article,.zp0035 .projectCard,.zp0035 .teamCard,.zp0035 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0035 .serviceGrid article:hover,.zp0035 .projectCard:hover,.zp0035 .teamCard:hover,.zp0035 .bentoCard:hover{
  transform:translateX(3px)
}
@media(prefers-reduced-motion:reduce){.zp0035 *,.zp0035 *::before,.zp0035 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0035 a,.zp0035 button,.zp0035 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav split"><nav><a href="#services">Services</a><a href="#proof">Proof</a></nav><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero diagonalHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Join the community</a><a href="#services">Explore</a></div></div><div className="diagonalVisual">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">34</span><div className="visualMark"/><small>{businessName}</small></div>}</div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Join the community</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Industrial / asymmetric-5-7</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
