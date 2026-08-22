import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0608-luxury-scandinavian", "family": "Scandinavian", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "centered-logo|data-led|booking-led|proof>community>process>security>services>destinations|heavy-frame|newspaper", "industry": "luxury", "hero": "data-led", "navigation": "centered-logo", "layout": "booking-led"};

export default function Template0608({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Marrow Luxury Brand");
  const headline = String(content.headline || "Quiet confidence, exceptional materials, and service designed around individual clients.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Signature collection", "Bespoke service", "Private appointments", "Journal", "Boutiques"];
  const industryLabel = "Luxury brand";
  const serviceNotes = ["Provenance documentation for every piece: origin, maker, and material certification.", "Private client service with discretion, privacy, and non-disclosure as standard.", "White-glove delivery and installation by our own specialist team.", "Bespoke commission pathway with a dedicated atelier contact from concept to completion.", "Aftercare programme: annual maintenance, authentication, and insurance valuation updates."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Sotheby's and Christie's vetted", "Private client discretion assured", "Provenance documentation", "Expert aftercare service"];
  const storyBody = "Marrow Luxury Brand is presented as a real working luxury brand, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "I sent a single enquiry. Within an hour I had a call from someone who clearly knew the category. That is rare in this market.";
  const team = [{"name": "Harbor Lead", "role": "Principal / Lead"}, {"name": "Lumen Team", "role": "Client experience"}, {"name": "Juniper Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Luxury brand / Project A", "Luxury brand / Project B", "Luxury brand / Project C", "Luxury brand / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Quiet confidence, exceptional materials, and service designed around individual clients. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ffffff";
  return <main className="zp0608" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0608{--bg:#060606;--fg:#f7f7f2;--primary:#ffffff;--primary-fg:#050505;--secondary:#8d8d8d;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:36px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0608 *{box-sizing:border-box}
.zp0608 a{color:inherit;text-decoration:none}
.zp0608 h1,.zp0608 h2,.zp0608 h3,.zp0608 blockquote{font-family:Times New Roman, serif;text-wrap:balance}
.zp0608 img{max-width:100%;display:block}
.zp0608 button,.zp0608 a{-webkit-tap-highlight-color:transparent}
.zp0608 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0608 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0608 .nav strong{font-family:Times New Roman, serif;font-size:18px}
.zp0608 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0608 .nav.centered strong{order:2;font-size:24px}
.zp0608 .nav.centered nav:first-child{order:1}
.zp0608 .nav.centered nav:last-child{order:3}
.zp0608 .mobileMenu{display:none}
.zp0608 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0608 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0608 .eyebrow,.zp0608 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0608 h1{font-size:clamp(48px,6.9vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0608 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0608 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0608 .heroActions a,.zp0608 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0608 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0608 .dataHero{grid-template-columns:.5fr 1.5fr}
.zp0608 .dataPanel{display:grid;gap:14px;padding:24px;border:1px solid var(--border);align-self:start}
.zp0608 .dataPanel b{font-size:90px;color:var(--fg);text-decoration:underline;text-decoration-color:var(--primary);text-decoration-thickness:5px}
.zp0608 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0608 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0608 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0608 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0608 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0608 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0608 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0608 .serviceGrid p{color:var(--muted)}
.zp0608 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0608 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0608 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0608 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0608 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0608 details{border-top:1px solid var(--border);padding:20px 0}
.zp0608 details summary{font-weight:800;cursor:pointer}
.zp0608 details p{color:var(--muted);max-width:70ch}
.zp0608 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0608 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0608 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0608 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0608 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0608 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0608 .contact .eyebrow{color:var(--bg)}
.zp0608 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0608 .contactMeta{display:grid;gap:10px}
.zp0608 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@media(max-width:1024px){.zp0608 .hero{min-height:auto}
.zp0608 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0608 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0608 .nav nav{display:none}
.zp0608 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0608 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0608 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0608 .mobileMenu nav a{padding:10px 8px}
.zp0608 .hero,.zp0608 .dataHero{grid-template-columns:1fr}
.zp0608 .section,.zp0608 .sectionTitle,.zp0608 .security,.zp0608 .contact{grid-template-columns:1fr}
.zp0608 .section{display:block}}
@media(max-width:430px){.zp0608{font-size:16px}
.zp0608 .hero,.zp0608 .section,.zp0608 .contact{padding-left:18px;padding-right:18px}
.zp0608 .serviceGrid,.zp0608 .proof,.zp0608 .destinations>div:last-child{grid-template-columns:1fr}
.zp0608 h1{font-size:clamp(42px,14vw,70px)}}

.zp0608 .heroActions a,.zp0608 .primary,.zp0608 .ctaBtn,.zp0608 .btnPrimary,.zp0608 .schedule>a,.zp0608 .newsletter>a{transition:all .2s ease}
.zp0608 .heroActions a:hover,.zp0608 .primary:hover,.zp0608 .ctaBtn:hover,.zp0608 .btnPrimary:hover{
  opacity:.75
}
.zp0608 nav a,.zp0608 .nav a,.zp0608 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0608 nav a:hover,.zp0608 .nav a:hover,.zp0608 .footer a:hover{
  opacity:.65
}
.zp0608 .serviceGrid article,.zp0608 .projectCard,.zp0608 .teamCard,.zp0608 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0608 .serviceGrid article:hover,.zp0608 .projectCard:hover,.zp0608 .teamCard:hover,.zp0608 .bentoCard:hover{
  opacity:.85
}
@keyframes zpEnter{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
.zp0608 .heroCopy{animation:zpEnter .7s cubic-bezier(.2,.8,.2,1) both}
.zp0608 .sectionTitle,.zp0608 .section>h2{animation:zpEnter .6s cubic-bezier(.2,.8,.2,1) .1s both}
@media(prefers-reduced-motion:reduce){.zp0608 *,.zp0608 *::before,.zp0608 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0608 a,.zp0608 button,.zp0608 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav centered"><nav><a href="#services">Services</a></nav><strong>{businessName}</strong><nav><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero dataHero"><div className="dataPanel"><b>01</b><span>{services.length} core services</span><span>Local expertise</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Plan your visit</a><a href="#services">Explore</a></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Plan your visit</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Scandinavian / booking-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
