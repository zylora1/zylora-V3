import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0683-photography-conceptual-sketch", "family": "Conceptual Sketch", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "statement-bar|split-image|asymmetric-5-7|awards>integrations>services>materials>proof>security|capsule|editorial-serif", "industry": "photography", "hero": "split-image", "navigation": "statement-bar", "layout": "asymmetric-5-7"};

export default function Template0683({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Juniper Photography Studio");
  const headline = String(content.headline || "Photography with a clear visual language and production that stays calm on set.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Editorial", "Commercial", "Portraits", "Campaigns", "Licensing"];
  const industryLabel = "Photography studio";
  const serviceNotes = ["Commercial and editorial commissions with same-day turnaround for press deadlines.", "Natural-light and studio sessions available with full styling coordination.", "Wedding coverage: two photographers, full day, premium album design and print.", "Brand photography packages with art direction, prop sourcing, and retouching.", "Archival printing on fine art paper — limited editions signed and numbered."];
  const proofPoints = ["Published: The Sunday Times, FT Weekend", "35mm and digital capability", "2-week edit turnaround guaranteed", "RAW files included"];
  const testimonial = "She made our whole team feel comfortable during the brand shoot. The images look like us, not like stock photography.";
  const team = [{"name": "Slate Lead", "role": "Principal / Lead"}, {"name": "Signal Team", "role": "Client experience"}, {"name": "Mosaic Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Photography studio / Project A", "Photography studio / Project B", "Photography studio / Project C", "Photography studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Photography with a clear visual language and production that stays calm on set. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#29c7b8";
  return <main className="zp0683" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0683{--bg:#081415;--fg:#eefafa;--primary:#29c7b8;--primary-fg:#050505;--secondary:#e5b55f;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:32px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:32px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0683 *{box-sizing:border-box}
.zp0683 a{color:inherit;text-decoration:none}
.zp0683 h1,.zp0683 h2,.zp0683 h3,.zp0683 blockquote{font-family:Georgia, serif;text-wrap:balance}
.zp0683 img{max-width:100%;display:block}
.zp0683 button,.zp0683 a{-webkit-tap-highlight-color:transparent}
.zp0683 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0683 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0683 .nav strong{font-family:Georgia, serif;font-size:18px}
.zp0683 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0683 .nav.statement{display:grid;grid-template-columns:1fr auto 1fr}
.zp0683 .nav.statement>a{justify-self:end}
.zp0683 .mobileMenu{display:none}
.zp0683 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0683 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0683 .eyebrow,.zp0683 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0683 h1{font-size:clamp(48px,6.9vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0683 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0683 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0683 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0683 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0683 .visual,.zp0683 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0683 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0683 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:32px;right:-8%;top:-18%;transform:rotate(12deg)}
.zp0683 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0683 .heroPhoto{object-fit:cover}
.zp0683 .splitHero{grid-template-columns:1.15fr .85fr}
.zp0683 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0683 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0683 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0683 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0683 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0683 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0683 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0683 .serviceGrid p{color:var(--muted)}
.zp0683 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0683 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0683 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0683 details{border-top:1px solid var(--border);padding:20px 0}
.zp0683 details summary{font-weight:800;cursor:pointer}
.zp0683 details p{color:var(--muted);max-width:70ch}
.zp0683 .integrations,.zp0683 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0683 .integrations>div,.zp0683 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0683 .integrations b,.zp0683 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0683 .awards>div{max-width:800px;margin-left:auto}
.zp0683 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0683 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0683 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0683 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0683 .contact .eyebrow{color:var(--bg)}
.zp0683 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0683 .contactMeta{display:grid;gap:10px}
.zp0683 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0683 .section:nth-of-type(odd){padding-left:max(24px,calc((100vw - var(--max))/2 + 7vw))}
.zp0683 .heroCopy{animation:enter-682 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-682{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0683 .hero{min-height:auto}
.zp0683 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0683 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0683 .nav nav{display:none}
.zp0683 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0683 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0683 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0683 .mobileMenu nav a{padding:10px 8px}
.zp0683 .hero,.zp0683 .splitHero{grid-template-columns:1fr}
.zp0683 .section,.zp0683 .sectionTitle,.zp0683 .security,.zp0683 .contact{grid-template-columns:1fr}
.zp0683 .section{display:block}}
@media(max-width:430px){.zp0683{font-size:16px}
.zp0683 .hero,.zp0683 .section,.zp0683 .contact{padding-left:18px;padding-right:18px}
.zp0683 .serviceGrid,.zp0683 .proof{grid-template-columns:1fr}
.zp0683 h1{font-size:clamp(42px,14vw,70px)}
.zp0683 .nav.statement{grid-template-columns:1fr auto}
.zp0683 .nav.statement>span:first-child{display:none}}

.zp0683 .heroActions a,.zp0683 .primary,.zp0683 .ctaBtn,.zp0683 .btnPrimary,.zp0683 .schedule>a,.zp0683 .newsletter>a{transition:all .2s ease}
.zp0683 .heroActions a:hover,.zp0683 .primary:hover,.zp0683 .ctaBtn:hover,.zp0683 .btnPrimary:hover{
  opacity:.8
}
.zp0683 nav a,.zp0683 .nav a,.zp0683 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0683 nav a:hover,.zp0683 .nav a:hover,.zp0683 .footer a:hover{
  opacity:.7
}
.zp0683 .serviceGrid article,.zp0683 .projectCard,.zp0683 .teamCard,.zp0683 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0683 .serviceGrid article:hover,.zp0683 .projectCard:hover,.zp0683 .teamCard:hover,.zp0683 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0683 *,.zp0683 *::before,.zp0683 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0683 a,.zp0683 button,.zp0683 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav statement"><span>Independent / Local / Established</span><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero splitHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Send an enquiry</a><a href="#services">Explore</a></div></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">82</span><div className="visualMark"/><small>{businessName}</small></div>}</section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Send an enquiry</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Conceptual Sketch / asymmetric-5-7</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
