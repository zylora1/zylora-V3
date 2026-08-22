import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0648-salon-geometric", "family": "Geometric", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "corner-dock|monumental-type|catalogue-table|proof>services>case-study>availability>community>research>security|micro-radius|terminal", "industry": "salon", "hero": "monumental-type", "navigation": "corner-dock", "layout": "catalogue-table"};

export default function Template0648({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Common Hair Salon");
  const headline = String(content.headline || "Great hair built on consultation, craft, and a style that works after you leave.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Cuts", "Colour", "Texture services", "Treatments", "Bridal styling"];
  const serviceNotes = ["Colour consultation at every appointment — formulation adjusted for condition and light.", "Bond builder and toning treatments included in all colour services, not an add-on.", "Olaplex, K18, and Kerasilk treatments available across the service menu.", "Evening appointments available Tuesday through Thursday for working clients.", "Bridal service: trial, wedding day, and preparation pack with hair care advice."];
  const proofPoints = ["HABIA qualified stylists", "Aveda flagship partner", "Bridal specialists available", "Same-day appointments most weeks"];
  const storyBody = "Common Hair Salon is presented as a real working hair salon, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "My colour has never lasted this well. They adjusted the formula from my last visit based on how it had grown — nobody has ever done that.";
  const team = [{"name": "Juniper Lead", "role": "Principal / Lead"}, {"name": "Miller & Rowe Team", "role": "Client experience"}, {"name": "Stone & Pine Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Hair salon / Project A", "Hair salon / Project B", "Hair salon / Project C", "Hair salon / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Great hair built on consultation, craft, and a style that works after you leave. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ffffff";
  return <main className="zp0648" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0648{--bg:#060606;--fg:#f7f7f2;--primary:#ffffff;--primary-fg:#050505;--secondary:#8d8d8d;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:36px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0648 *{box-sizing:border-box}
.zp0648 a{color:inherit;text-decoration:none}
.zp0648 h1,.zp0648 h2,.zp0648 h3,.zp0648 blockquote{font-family:Lucida Console, Monaco, monospace;text-wrap:balance}
.zp0648 img{max-width:100%;display:block}
.zp0648 button,.zp0648 a{-webkit-tap-highlight-color:transparent}
.zp0648 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0648 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0648 .nav strong{font-family:Lucida Console, Monaco, monospace;font-size:18px}
.zp0648 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0648 .mobileMenu{display:none}
.zp0648 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0648 .eyebrow,.zp0648 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0648 h1{font-size:clamp(48px,6.9vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0648 .schedule>a,.zp0648 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0648 .monumentalHero{display:block}
.zp0648 .monumentalHero h1{font-size:clamp(74px,16vw,250px);max-width:none;word-break:break-word}
.zp0648 .monumentalBody{display:grid;grid-template-columns:1fr auto;gap:30px;border-top:1px solid var(--border);padding-top:22px}
.zp0648 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0648 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0648 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0648 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0648 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0648 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0648 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0648 .serviceGrid p{color:var(--muted)}
.zp0648 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0648 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0648 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0648 details{border-top:1px solid var(--border);padding:20px 0}
.zp0648 details summary{font-weight:800;cursor:pointer}
.zp0648 details p{color:var(--muted);max-width:70ch}
.zp0648 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0648 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0648 .projects article:nth-child(2){transform:translateY(32px)}
.zp0648 .schedule,.zp0648 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0648 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0648 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0648 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0648 .researchRows{max-width:900px;margin-left:auto}
.zp0648 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0648 .contact .eyebrow{color:var(--bg)}
.zp0648 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0648 .contactMeta{display:grid;gap:10px}
.zp0648 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-647{from{opacity:0;transform:translateY(25px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0648 .hero{min-height:auto}
.zp0648 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0648 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0648 .nav nav{display:none}
.zp0648 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0648 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0648 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0648 .mobileMenu nav a{padding:10px 8px}
.zp0648 .hero{grid-template-columns:1fr}
.zp0648 .section,.zp0648 .sectionTitle,.zp0648 .security,.zp0648 .contact{grid-template-columns:1fr}
.zp0648 .projects .projectGrid{grid-template-columns:1fr}
.zp0648 .projects article:nth-child(2){transform:none}
.zp0648 .section{display:block}}
@media(max-width:430px){.zp0648{font-size:16px}
.zp0648 .hero,.zp0648 .section,.zp0648 .contact{padding-left:18px;padding-right:18px}
.zp0648 .serviceGrid,.zp0648 .proof{grid-template-columns:1fr}
.zp0648 h1{font-size:clamp(42px,14vw,70px)}
.zp0648 .monumentalHero h1{font-size:clamp(58px,19vw,100px)}
.zp0648 .monumentalBody{grid-template-columns:1fr}}

.zp0648 .heroActions a,.zp0648 .primary,.zp0648 .ctaBtn,.zp0648 .btnPrimary,.zp0648 .schedule>a,.zp0648 .newsletter>a{transition:all .2s ease}
.zp0648 .heroActions a:hover,.zp0648 .primary:hover,.zp0648 .ctaBtn:hover,.zp0648 .btnPrimary:hover{
  transform:scale(1.04)
}
.zp0648 nav a,.zp0648 .nav a,.zp0648 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0648 nav a:hover,.zp0648 .nav a:hover,.zp0648 .footer a:hover{
  color:var(--primary)
}
.zp0648 .serviceGrid article,.zp0648 .projectCard,.zp0648 .teamCard,.zp0648 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0648 .serviceGrid article:hover,.zp0648 .projectCard:hover,.zp0648 .teamCard:hover,.zp0648 .bentoCard:hover{
  transform:scale(1.03) rotate(1deg)
}
@media(prefers-reduced-motion:reduce){.zp0648 *,.zp0648 *::before,.zp0648 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0648 a,.zp0648 button,.zp0648 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav dock"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero monumentalHero"><h1>{businessName}</h1><div className="monumentalBody"><p>{headline}</p><a href="#contact">Request a demo</a></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a demo</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Geometric / catalogue-table</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
