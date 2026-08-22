import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0017-medical-retro-computing", "family": "Retro Computing", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "classic-horizontal|magazine-cover|case-study-led|menu>services>process>comparison>values>proof|square-editorial|friendly", "industry": "medical", "hero": "magazine-cover", "navigation": "classic-horizontal", "layout": "case-study-led"};

export default function Template0017({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Oak & Tide Primary Care Clinic");
  const headline = String(content.headline || "Thoughtful primary care built around continuity, access, and informed decisions.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Annual physicals", "Same-day visits", "Chronic care", "Vaccinations", "Health screenings"];
  const serviceNotes = ["Thorough assessment with a full review of your history and current concerns.", "Evidence-based treatment options explained clearly, so you can make informed decisions.", "Seamless referral network for specialist care when needed.", "Ongoing monitoring with follow-up built into every care plan.", "Preventive guidance tailored to your lifestyle and long-term goals."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["GMC/NMC registered", "Same-week appointments", "Results reviewed together", "Referrals within 24h"];
  const testimonial = "Finally a clinic that listens. They explained my results in plain language and followed up without me having to chase.";
  const team = [{"name": "Pavilion Lead", "role": "Principal / Lead"}, {"name": "Bureau Team", "role": "Client experience"}, {"name": "Elm Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Primary care clinic / Project A", "Primary care clinic / Project B", "Primary care clinic / Project C", "Primary care clinic / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Thoughtful primary care built around continuity, access, and informed decisions. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#b75a3c";
  return <main className="zp0017" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0017{--bg:#f2e6d8;--fg:#34291d;--primary:#b75a3c;--primary-fg:#ffffff;--secondary:#5a7c6b;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:24px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0017 *{box-sizing:border-box}
.zp0017 a{color:inherit;text-decoration:none}
.zp0017 h1,.zp0017 h2,.zp0017 h3,.zp0017 blockquote{font-family:Trebuchet MS, Arial, sans-serif;text-wrap:balance}
.zp0017 img{max-width:100%;display:block}
.zp0017 button,.zp0017 a{-webkit-tap-highlight-color:transparent}
.zp0017 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0017 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0017 .nav strong{font-family:Trebuchet MS, Arial, sans-serif;font-size:18px}
.zp0017 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0017 .mobileMenu{display:none}
.zp0017 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0017 .eyebrow,.zp0017 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0017 h1{font-size:clamp(48px,6.35vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0017 .visual,.zp0017 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0017 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0017 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(12deg)}
.zp0017 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0017 .heroPhoto{object-fit:cover}
.zp0017 .coverHero{grid-template-columns:.12fr 1.05fr .83fr;align-items:end}
.zp0017 .coverHero>h1{writing-mode:vertical-rl;transform:rotate(180deg);font-size:clamp(50px,8vw,130px);max-width:none}
.zp0017 .coverCaption{align-self:end}
.zp0017 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0017 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0017 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0017 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0017 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0017 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0017 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0017 .serviceGrid p{color:var(--muted)}
.zp0017 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0017 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0017 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0017 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0017 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0017 details{border-top:1px solid var(--border);padding:20px 0}
.zp0017 details summary{font-weight:800;cursor:pointer}
.zp0017 details p{color:var(--muted);max-width:70ch}
.zp0017 .menuSection>div:last-child p{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0017 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Trebuchet MS, Arial, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0017 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0017 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0017 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0017 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0017 .contact .eyebrow{color:var(--bg)}
.zp0017 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0017 .contactMeta{display:grid;gap:10px}
.zp0017 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0017{image-rendering:pixelated}
.zp0017 *{border-radius:0!important}
.zp0017 .visual{background:repeating-linear-gradient(90deg,var(--surface) 0 8px,color-mix(in srgb,var(--primary) 40%,var(--surface)) 9px 10px)}
@keyframes enter-16{from{opacity:0;transform:translateY(34px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0017 .hero{min-height:auto}
.zp0017 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0017 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0017 .nav nav{display:none}
.zp0017 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0017 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0017 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0017 .mobileMenu nav a{padding:10px 8px}
.zp0017 .hero,.zp0017 .coverHero{grid-template-columns:1fr}
.zp0017 .section,.zp0017 .sectionTitle,.zp0017 .contact{grid-template-columns:1fr}
.zp0017 .section{display:block}}
@media(max-width:430px){.zp0017{font-size:16px}
.zp0017 .hero,.zp0017 .section,.zp0017 .contact{padding-left:18px;padding-right:18px}
.zp0017 .serviceGrid,.zp0017 .proof,.zp0017 .compareGrid{grid-template-columns:1fr}
.zp0017 h1{font-size:clamp(42px,14vw,70px)}}

.zp0017 .heroActions a,.zp0017 .primary,.zp0017 .ctaBtn,.zp0017 .btnPrimary,.zp0017 .schedule>a,.zp0017 .newsletter>a{transition:all .2s ease}
.zp0017 .heroActions a:hover,.zp0017 .primary:hover,.zp0017 .ctaBtn:hover,.zp0017 .btnPrimary:hover{
  border-color:var(--primary);color:var(--primary)
}
.zp0017 nav a,.zp0017 .nav a,.zp0017 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0017 nav a:hover,.zp0017 .nav a:hover,.zp0017 .footer a:hover{
  color:var(--primary)
}
.zp0017 .serviceGrid article,.zp0017 .projectCard,.zp0017 .teamCard,.zp0017 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0017 .serviceGrid article:hover,.zp0017 .projectCard:hover,.zp0017 .teamCard:hover,.zp0017 .bentoCard:hover{
  border-color:var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0017 *,.zp0017 *::before,.zp0017 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0017 a,.zp0017 button,.zp0017 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero coverHero"><div className="issue">Issue 0017</div><h1>{businessName}</h1>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">16</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="coverCaption"><b>{headline}</b><p>{description}</p></div></section>
    <section className="section menuSection"><div className="sectionTitle"><span>Selection</span><h2>Current favourites.</h2></div><div>{services.map((s,i)=><p key={s}><span>{s}</span><b>{i%2?"Seasonal":"Signature"}</b></p>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Retro Computing / case-study-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
