import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0515-cybersecurity-horizontal-storytelling", "family": "Horizontal Storytelling", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "split-logo|diagonal-cut|press-led|programmes>gallery>team>proof>services>security|inset-panel|editorial-serif", "industry": "cybersecurity", "hero": "diagonal-cut", "navigation": "split-logo", "layout": "press-led"};

export default function Template0515({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Harbor Cybersecurity Firm");
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
  const team = [{"name": "Cedar Lead", "role": "Principal / Lead"}, {"name": "Arc Team", "role": "Client experience"}, {"name": "Slate Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Cybersecurity firm / Project A", "Cybersecurity firm / Project B", "Cybersecurity firm / Project C", "Cybersecurity firm / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Practical security that reduces exposure without slowing the business down. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ad7a45";
  return <main className="zp0515" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0515{--bg:#f8f2e8;--fg:#2e2723;--primary:#ad7a45;--primary-fg:#050505;--secondary:#716b56;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:16px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:32px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0515 *{box-sizing:border-box}
.zp0515 a{color:inherit;text-decoration:none}
.zp0515 h1,.zp0515 h2,.zp0515 h3,.zp0515 blockquote{font-family:Georgia, serif;text-wrap:balance}
.zp0515 img{max-width:100%;display:block}
.zp0515 button,.zp0515 a{-webkit-tap-highlight-color:transparent}
.zp0515 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0515 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0515 .nav strong{font-family:Georgia, serif;font-size:18px}
.zp0515 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0515 .mobileMenu{display:none}
.zp0515 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0515 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0515 .eyebrow,.zp0515 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0515 h1{font-size:clamp(48px,8.0vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0515 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0515 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0515 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0515 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0515 .visual,.zp0515 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0515 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0515 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:16px;right:-8%;top:-18%;transform:rotate(-12deg)}
.zp0515 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0515 .heroPhoto{object-fit:cover}
.zp0515 .diagonalHero{grid-template-columns:1.15fr .85fr}
.zp0515 .diagonalVisual{clip-path:polygon(22% 0,100% 0,78% 100%,0 100%)}
.zp0515 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0515 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0515 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0515 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0515 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0515 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0515 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0515 .serviceGrid p{color:var(--muted)}
.zp0515 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0515 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0515 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0515 details{border-top:1px solid var(--border);padding:20px 0}
.zp0515 details summary{font-weight:800;cursor:pointer}
.zp0515 details p{color:var(--muted);max-width:70ch}
.zp0515 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0515 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0515 .galleryGrid>*:first-child{grid-row:1/3}
.zp0515 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0515 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0515 .g2,.zp0515 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0515 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0515 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0515 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Georgia, serif;margin-bottom:18px}
.zp0515 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0515 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0515 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0515 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0515 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0515 .contact .eyebrow{color:var(--bg)}
.zp0515 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0515 .contactMeta{display:grid;gap:10px}
.zp0515 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0515 .heroCopy{animation:enter-514 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-514{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0515 .hero{min-height:auto}
.zp0515 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0515 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0515 .nav nav{display:none}
.zp0515 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0515 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0515 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0515 .mobileMenu nav a{padding:10px 8px}
.zp0515 .hero,.zp0515 .diagonalHero{grid-template-columns:1fr}
.zp0515 .section,.zp0515 .sectionTitle,.zp0515 .security,.zp0515 .contact{grid-template-columns:1fr}
.zp0515 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0515 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0515 .teamGrid{grid-template-columns:1fr 1fr}
.zp0515 .section{display:block}}
@media(max-width:430px){.zp0515{font-size:16px}
.zp0515 .hero,.zp0515 .section,.zp0515 .contact{padding-left:18px;padding-right:18px}
.zp0515 .serviceGrid,.zp0515 .proof,.zp0515 .teamGrid,.zp0515 .programmes>div:last-child{grid-template-columns:1fr}
.zp0515 h1{font-size:clamp(42px,14vw,70px)}
.zp0515 .galleryGrid{grid-template-columns:1fr}
.zp0515 .galleryGrid>*:first-child{grid-column:auto}}

.zp0515 .heroActions a,.zp0515 .primary,.zp0515 .ctaBtn,.zp0515 .btnPrimary,.zp0515 .schedule>a,.zp0515 .newsletter>a{transition:all .2s ease}
.zp0515 .heroActions a:hover,.zp0515 .primary:hover,.zp0515 .ctaBtn:hover,.zp0515 .btnPrimary:hover{
  opacity:.8
}
.zp0515 nav a,.zp0515 .nav a,.zp0515 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0515 nav a:hover,.zp0515 .nav a:hover,.zp0515 .footer a:hover{
  color:var(--primary)
}
.zp0515 .serviceGrid article,.zp0515 .projectCard,.zp0515 .teamCard,.zp0515 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0515 .serviceGrid article:hover,.zp0515 .projectCard:hover,.zp0515 .teamCard:hover,.zp0515 .bentoCard:hover{
  transform:translateX(2px)
}
@media(prefers-reduced-motion:reduce){.zp0515 *,.zp0515 *::before,.zp0515 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0515 a,.zp0515 button,.zp0515 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav split"><nav><a href="#services">Services</a><a href="#proof">Proof</a></nav><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero diagonalHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Send an enquiry</a><a href="#services">Explore</a></div></div><div className="diagonalVisual">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">14</span><div className="visualMark"/><small>{businessName}</small></div>}</div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Send an enquiry</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Horizontal Storytelling / press-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
