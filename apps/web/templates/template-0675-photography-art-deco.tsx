import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0675-photography-art-deco", "family": "Art Deco", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "split-logo|diagonal-cut|timeline-narrative|proof>hours>manifesto>security>products>services>availability|inset-panel|poster", "industry": "photography", "hero": "diagonal-cut", "navigation": "split-logo", "layout": "timeline-narrative"};

export default function Template0675({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Harbor Photography Studio");
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
  const team = [{"name": "Cedar Lead", "role": "Principal / Lead"}, {"name": "Arc Team", "role": "Client experience"}, {"name": "Slate Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Photography studio / Project A", "Photography studio / Project B", "Photography studio / Project C", "Photography studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Photography with a clear visual language and production that stays calm on set. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ad7a45";
  return <main className="zp0675" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0675{--bg:#f8f2e8;--fg:#2e2723;--primary:#ad7a45;--primary-fg:#050505;--secondary:#716b56;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:16px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:32px;background:var(--bg);color:var(--fg);font-family:Helvetica Neue, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0675 *{box-sizing:border-box}
.zp0675 a{color:inherit;text-decoration:none}
.zp0675 h1,.zp0675 h2,.zp0675 h3,.zp0675 blockquote{font-family:Impact, Arial Black, sans-serif;text-wrap:balance}
.zp0675 img{max-width:100%;display:block}
.zp0675 button,.zp0675 a{-webkit-tap-highlight-color:transparent}
.zp0675 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0675 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0675 .nav strong{font-family:Impact, Arial Black, sans-serif;font-size:18px}
.zp0675 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0675 .mobileMenu{display:none}
.zp0675 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0675 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0675 .eyebrow,.zp0675 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0675 h1{font-size:clamp(48px,8.0vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0675 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0675 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0675 .heroActions a,.zp0675 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0675 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0675 .visual,.zp0675 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0675 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0675 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:16px;right:-8%;top:-18%;transform:rotate(16deg)}
.zp0675 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0675 .heroPhoto{object-fit:cover}
.zp0675 .diagonalHero{grid-template-columns:1.15fr .85fr}
.zp0675 .diagonalVisual{clip-path:polygon(22% 0,100% 0,78% 100%,0 100%)}
.zp0675 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0675 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0675 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0675 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0675 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0675 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0675 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0675 .serviceGrid p{color:var(--muted)}
.zp0675 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0675 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0675 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0675 details{border-top:1px solid var(--border);padding:20px 0}
.zp0675 details summary{font-weight:800;cursor:pointer}
.zp0675 details p{color:var(--muted);max-width:70ch}
.zp0675 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0675 .hours dl{margin:0}
.zp0675 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0675 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0675 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0675 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0675 .p1,.zp0675 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0675 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Impact, Arial Black, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0675 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0675 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0675 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0675 .contact .eyebrow{color:var(--bg)}
.zp0675 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0675 .contactMeta{display:grid;gap:10px}
.zp0675 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0675 .sectionTitle:before{content:"◆";color:var(--primary);font-size:22px}
.zp0675 .visual{clip-path:polygon(50% 0,100% 20%,100% 80%,50% 100%,0 80%,0 20%)}
.zp0675 .heroCopy{animation:enter-674 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-674{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0675 .hero{min-height:auto}
.zp0675 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0675 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0675 .nav nav{display:none}
.zp0675 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0675 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0675 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0675 .mobileMenu nav a{padding:10px 8px}
.zp0675 .hero,.zp0675 .diagonalHero{grid-template-columns:1fr}
.zp0675 .section,.zp0675 .sectionTitle,.zp0675 .hours,.zp0675 .security,.zp0675 .contact{grid-template-columns:1fr}
.zp0675 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0675 .section{display:block}}
@media(max-width:430px){.zp0675{font-size:16px}
.zp0675 .hero,.zp0675 .section,.zp0675 .contact{padding-left:18px;padding-right:18px}
.zp0675 .serviceGrid,.zp0675 .proof,.zp0675 .collectionGrid{grid-template-columns:1fr}
.zp0675 h1{font-size:clamp(42px,14vw,70px)}}

.zp0675 .heroActions a,.zp0675 .primary,.zp0675 .ctaBtn,.zp0675 .btnPrimary,.zp0675 .schedule>a,.zp0675 .newsletter>a{transition:all .2s ease}
.zp0675 .heroActions a:hover,.zp0675 .primary:hover,.zp0675 .ctaBtn:hover,.zp0675 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);letter-spacing:.08em
}
.zp0675 nav a,.zp0675 .nav a,.zp0675 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0675 nav a:hover,.zp0675 .nav a:hover,.zp0675 .footer a:hover{
  color:var(--primary)
}
.zp0675 .serviceGrid article,.zp0675 .projectCard,.zp0675 .teamCard,.zp0675 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0675 .serviceGrid article:hover,.zp0675 .projectCard:hover,.zp0675 .teamCard:hover,.zp0675 .bentoCard:hover{
  border-color:var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0675 *,.zp0675 *::before,.zp0675 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0675 a,.zp0675 button,.zp0675 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav split"><nav><a href="#services">Services</a><a href="#proof">Proof</a></nav><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero diagonalHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Reserve a table</a><a href="#services">Explore</a></div></div><div className="diagonalVisual">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">74</span><div className="visualMark"/><small>{businessName}</small></div>}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Art Deco / timeline-narrative</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
