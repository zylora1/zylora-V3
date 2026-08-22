import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0528-cybersecurity-streetwear", "family": "Streetwear", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "centered-logo|asymmetric-editorial|property-led|services>story>security>testimonial>location>proof>community|heavy-frame|terminal", "industry": "cybersecurity", "hero": "asymmetric-editorial", "navigation": "centered-logo", "layout": "property-led"};

export default function Template0528({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Kite Cybersecurity Firm");
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
  const storyQuote = "\u201cPractical security that reduces exposure without slowing the business down.\u201d";
  const storyBody = "Kite Cybersecurity Firm is presented as a real working cybersecurity firm, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "They found a critical vulnerability our previous pen test missed. The report was actionable, not just a list of CVEs.";
  const testimonialName = "Studio Nine client";
  const team = [{"name": "Stone & Pine Lead", "role": "Principal / Lead"}, {"name": "Foxglove Team", "role": "Client experience"}, {"name": "Atlas Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Cybersecurity firm / Project A", "Cybersecurity firm / Project B", "Cybersecurity firm / Project C", "Cybersecurity firm / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Practical security that reduces exposure without slowing the business down. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ffffff";
  return <main className="zp0528" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0528{--bg:#060606;--fg:#f7f7f2;--primary:#ffffff;--primary-fg:#050505;--secondary:#8d8d8d;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:36px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0528 *{box-sizing:border-box}
.zp0528 a{color:inherit;text-decoration:none}
.zp0528 h1,.zp0528 h2,.zp0528 h3,.zp0528 blockquote{font-family:Lucida Console, Monaco, monospace;text-wrap:balance}
.zp0528 img{max-width:100%;display:block}
.zp0528 button,.zp0528 a{-webkit-tap-highlight-color:transparent}
.zp0528 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0528 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0528 .nav strong{font-family:Lucida Console, Monaco, monospace;font-size:18px}
.zp0528 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0528 .nav.centered strong{order:2;font-size:24px}
.zp0528 .nav.centered nav:first-child{order:1}
.zp0528 .nav.centered nav:last-child{order:3}
.zp0528 .mobileMenu{display:none}
.zp0528 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0528 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0528 .eyebrow,.zp0528 .sectionTitle>span,.zp0528 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0528 h1{font-size:clamp(48px,6.9vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0528 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0528 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0528 .heroActions a,.zp0528 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0528 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0528 .visual,.zp0528 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0528 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0528 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(4deg)}
.zp0528 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0528 .heroPhoto{object-fit:cover}
.zp0528 .asymHero{grid-template-columns:0.85fr 1.15fr}
.zp0528 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0528 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0528 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0528 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0528 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0528 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0528 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0528 .serviceGrid p{color:var(--muted)}
.zp0528 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0528 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0528 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0528 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0528 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0528 .story p{color:var(--muted)}
.zp0528 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0528 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0528 .testimonial>div{align-self:end}
.zp0528 .testimonial span{display:block;opacity:.7}
.zp0528 details{border-top:1px solid var(--border);padding:20px 0}
.zp0528 details summary{font-weight:800;cursor:pointer}
.zp0528 details p{color:var(--muted);max-width:70ch}
.zp0528 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0528 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0528 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0528 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0528 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0528 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0528 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0528 .contact .eyebrow{color:var(--bg)}
.zp0528 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0528 .contactMeta{display:grid;gap:10px}
.zp0528 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0528 .heroCopy{animation:enter-527 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-527{from{opacity:0;transform:translateY(25px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0528 .hero{min-height:auto}
.zp0528 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0528 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0528 .nav nav{display:none}
.zp0528 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0528 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0528 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0528 .mobileMenu nav a{padding:10px 8px}
.zp0528 .hero,.zp0528 .asymHero{grid-template-columns:1fr}
.zp0528 .section,.zp0528 .sectionTitle,.zp0528 .story,.zp0528 .location,.zp0528 .security,.zp0528 .contact{grid-template-columns:1fr}
.zp0528 .testimonial{grid-template-columns:1fr}
.zp0528 .section{display:block}}
@media(max-width:430px){.zp0528{font-size:16px}
.zp0528 .hero,.zp0528 .section,.zp0528 .contact{padding-left:18px;padding-right:18px}
.zp0528 .serviceGrid,.zp0528 .proof{grid-template-columns:1fr}
.zp0528 h1{font-size:clamp(42px,14vw,70px)}}

.zp0528 .heroActions a,.zp0528 .primary,.zp0528 .ctaBtn,.zp0528 .btnPrimary,.zp0528 .schedule>a,.zp0528 .newsletter>a{transition:all .2s ease}
.zp0528 .heroActions a:hover,.zp0528 .primary:hover,.zp0528 .ctaBtn:hover,.zp0528 .btnPrimary:hover{
  background:var(--fg);color:var(--bg);transform:skewX(-2deg)
}
.zp0528 nav a,.zp0528 .nav a,.zp0528 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0528 nav a:hover,.zp0528 .nav a:hover,.zp0528 .footer a:hover{
  color:var(--primary)
}
.zp0528 .serviceGrid article,.zp0528 .projectCard,.zp0528 .teamCard,.zp0528 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0528 .serviceGrid article:hover,.zp0528 .projectCard:hover,.zp0528 .teamCard:hover,.zp0528 .bentoCard:hover{
  transform:skewX(-1deg)
}
@media(prefers-reduced-motion:reduce){.zp0528 *,.zp0528 *::before,.zp0528 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0528 a,.zp0528 button,.zp0528 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav centered"><nav><a href="#services">Services</a></nav><strong>{businessName}</strong><nav><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero asymHero"><div className="heroNumber">06</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">View selected work</a><a href="#services">Explore</a></div></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">27</span><div className="visualMark"/><small>{businessName}</small></div>}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>View selected work</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Streetwear / property-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
