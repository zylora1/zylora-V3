import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0677-photography-postmodern", "family": "Postmodern", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "lower-third|testimonial-led|gallery-index|features>values>services>proof>story>research|ticket-edge|condensed-editorial", "industry": "photography", "hero": "testimonial-led", "navigation": "lower-third", "layout": "gallery-index"};

export default function Template0677({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Aster Photography Studio");
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
  const storyQuote = "\u201cPhotography with a clear visual language and production that stays calm on set.\u201d";
  const storyBody = "Aster Photography Studio is presented as a real working photography studio, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "She made our whole team feel comfortable during the brand shoot. The images look like us, not like stock photography.";
  const team = [{"name": "Common Lead", "role": "Principal / Lead"}, {"name": "Stillwater Team", "role": "Client experience"}, {"name": "Kite Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Photography studio / Project A", "Photography studio / Project B", "Photography studio / Project C", "Photography studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Photography with a clear visual language and production that stays calm on set. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#f06d3b";
  return <main className="zp0677" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0677{--bg:#fff8ef;--fg:#2e251f;--primary:#f06d3b;--primary-fg:#050505;--secondary:#e1b355;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:8px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:24px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0677 *{box-sizing:border-box}
.zp0677 a{color:inherit;text-decoration:none}
.zp0677 h1,.zp0677 h2,.zp0677 h3,.zp0677 blockquote{font-family:Arial Narrow, Arial, sans-serif;text-wrap:balance}
.zp0677 img{max-width:100%;display:block}
.zp0677 button,.zp0677 a{-webkit-tap-highlight-color:transparent}
.zp0677 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0677 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0677 .nav strong{font-family:Arial Narrow, Arial, sans-serif;font-size:18px}
.zp0677 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0677 .nav.lower{position:absolute;top:auto;bottom:0;width:100%;border-top:var(--line) solid var(--border)}
.zp0677 .mobileMenu{display:none}
.zp0677 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0677 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0677 .eyebrow,.zp0677 .sectionTitle>span,.zp0677 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0677 h1{font-size:clamp(48px,6.35vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0677 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0677 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0677 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0677 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0677 .quoteHero{grid-template-columns:1fr 1fr}
.zp0677 .quoteHero blockquote{font-size:clamp(36px,5vw,76px);line-height:.98;margin:0}
.zp0677 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0677 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0677 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0677 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0677 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0677 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0677 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0677 .serviceGrid p{color:var(--muted)}
.zp0677 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0677 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0677 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0677 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0677 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0677 .story p{color:var(--muted)}
.zp0677 details{border-top:1px solid var(--border);padding:20px 0}
.zp0677 details summary{font-weight:800;cursor:pointer}
.zp0677 details p{color:var(--muted);max-width:70ch}
.zp0677 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0677 .features ul{list-style:none;margin:0;padding:0}
.zp0677 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0677 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0677 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Arial Narrow, Arial, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0677 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0677 .researchRows{max-width:900px;margin-left:auto}
.zp0677 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0677 .contact .eyebrow{color:var(--bg)}
.zp0677 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0677 .contactMeta{display:grid;gap:10px}
.zp0677 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0677 .heroCopy{animation:enter-676 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-676{from{opacity:0;transform:translateY(34px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0677 .hero{min-height:auto}
.zp0677 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0677 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0677 .nav nav{display:none}
.zp0677 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0677 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0677 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0677 .mobileMenu nav a{padding:10px 8px}
.zp0677 .hero,.zp0677 .quoteHero{grid-template-columns:1fr}
.zp0677 .section,.zp0677 .sectionTitle,.zp0677 .story,.zp0677 .features,.zp0677 .contact{grid-template-columns:1fr}
.zp0677 .section{display:block}}
@media(max-width:430px){.zp0677{font-size:16px}
.zp0677 .hero,.zp0677 .section,.zp0677 .contact{padding-left:18px;padding-right:18px}
.zp0677 .serviceGrid,.zp0677 .proof{grid-template-columns:1fr}
.zp0677 h1{font-size:clamp(42px,14vw,70px)}}

.zp0677 .heroActions a,.zp0677 .primary,.zp0677 .ctaBtn,.zp0677 .btnPrimary,.zp0677 .schedule>a,.zp0677 .newsletter>a{transition:all .2s ease}
.zp0677 .heroActions a:hover,.zp0677 .primary:hover,.zp0677 .ctaBtn:hover,.zp0677 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0677 nav a,.zp0677 .nav a,.zp0677 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0677 nav a:hover,.zp0677 .nav a:hover,.zp0677 .footer a:hover{
  color:var(--primary)
}
.zp0677 .serviceGrid article,.zp0677 .projectCard,.zp0677 .teamCard,.zp0677 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0677 .serviceGrid article:hover,.zp0677 .projectCard:hover,.zp0677 .teamCard:hover,.zp0677 .bentoCard:hover{
  transform:rotate(-1deg)
}
@media(prefers-reduced-motion:reduce){.zp0677 *,.zp0677 *::before,.zp0677 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0677 a,.zp0677 button,.zp0677 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav lower"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero quoteHero"><blockquote>“Clear, thoughtful, and easy to work with.”</blockquote><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Shop the collection</a><a href="#services">Explore</a></div></div></section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Shop the collection</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Postmodern / gallery-index</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
