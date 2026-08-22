import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0604-luxury-streetwear", "family": "Streetwear", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "minimal-wordmark|map-led|research-led|services>story>proof>menu>credentials|notched|sports-editorial", "industry": "luxury", "hero": "map-led", "navigation": "minimal-wordmark", "layout": "research-led"};

export default function Template0604({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Elm Luxury Brand");
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
  const proofPoints = ["Sotheby's and Christie's vetted", "Private client discretion assured", "Provenance documentation", "Expert aftercare service"];
  const storyQuote = "\u201cQuiet confidence, exceptional materials, and service designed around individual clients.\u201d";
  const storyBody = "Elm Luxury Brand is presented as a real working luxury brand, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "I sent a single enquiry. Within an hour I had a call from someone who clearly knew the category. That is rare in this market.";
  const team = [{"name": "Clove Lead", "role": "Principal / Lead"}, {"name": "Harbor Team", "role": "Client experience"}, {"name": "Lumen Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Luxury brand / Project A", "Luxury brand / Project B", "Luxury brand / Project C", "Luxury brand / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Quiet confidence, exceptional materials, and service designed around individual clients. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff7a59";
  return <main className="zp0604" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0604{--bg:#0c1020;--fg:#eff2ff;--primary:#ff7a59;--primary-fg:#050505;--secondary:#5ee0c3;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:36px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0604 *{box-sizing:border-box}
.zp0604 a{color:inherit;text-decoration:none}
.zp0604 h1,.zp0604 h2,.zp0604 h3,.zp0604 blockquote{font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;text-wrap:balance}
.zp0604 img{max-width:100%;display:block}
.zp0604 button,.zp0604 a{-webkit-tap-highlight-color:transparent}
.zp0604 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0604 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0604 .nav strong{font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;font-size:18px}
.zp0604 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0604 .mobileMenu{display:none}
.zp0604 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0604 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0604 .eyebrow,.zp0604 .sectionTitle>span,.zp0604 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0604 h1{font-size:clamp(48px,7.45vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0604 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0604 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0604 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0604 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0604 .mapHero{grid-template-columns:1fr 1fr}
.zp0604 .mapLines{min-height:440px;position:relative;background:linear-gradient(22deg,transparent 48%,var(--primary) 49% 50%,transparent 51%),linear-gradient(-18deg,transparent 58%,var(--secondary) 59% 60%,transparent 61%)}
.zp0604 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0604 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0604 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0604 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0604 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0604 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0604 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0604 .serviceGrid p{color:var(--muted)}
.zp0604 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0604 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0604 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0604 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0604 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0604 .story p{color:var(--muted)}
.zp0604 details{border-top:1px solid var(--border);padding:20px 0}
.zp0604 details summary{font-weight:800;cursor:pointer}
.zp0604 details p{color:var(--muted);max-width:70ch}
.zp0604 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0604 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0604 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0604 .menuSection>div:last-child p{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0604 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0604 .contact .eyebrow{color:var(--bg)}
.zp0604 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0604 .contactMeta{display:grid;gap:10px}
.zp0604 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0604 .heroCopy{animation:enter-603 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-603{from{opacity:0;transform:translateY(21px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0604 .hero{min-height:auto}
.zp0604 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0604 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0604 .nav nav{display:none}
.zp0604 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0604 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0604 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0604 .mobileMenu nav a{padding:10px 8px}
.zp0604 .hero,.zp0604 .mapHero{grid-template-columns:1fr}
.zp0604 .section,.zp0604 .sectionTitle,.zp0604 .story,.zp0604 .contact{grid-template-columns:1fr}
.zp0604 .section{display:block}}
@media(max-width:430px){.zp0604{font-size:16px}
.zp0604 .hero,.zp0604 .section,.zp0604 .contact{padding-left:18px;padding-right:18px}
.zp0604 .serviceGrid,.zp0604 .proof{grid-template-columns:1fr}
.zp0604 h1{font-size:clamp(42px,14vw,70px)}}

.zp0604 .heroActions a,.zp0604 .primary,.zp0604 .ctaBtn,.zp0604 .btnPrimary,.zp0604 .schedule>a,.zp0604 .newsletter>a{transition:all .2s ease}
.zp0604 .heroActions a:hover,.zp0604 .primary:hover,.zp0604 .ctaBtn:hover,.zp0604 .btnPrimary:hover{
  background:var(--fg);color:var(--bg);transform:skewX(-2deg)
}
.zp0604 nav a,.zp0604 .nav a,.zp0604 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0604 nav a:hover,.zp0604 .nav a:hover,.zp0604 .footer a:hover{
  color:var(--primary)
}
.zp0604 .serviceGrid article,.zp0604 .projectCard,.zp0604 .teamCard,.zp0604 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0604 .serviceGrid article:hover,.zp0604 .projectCard:hover,.zp0604 .teamCard:hover,.zp0604 .bentoCard:hover{
  transform:skewX(-1deg)
}
@media(prefers-reduced-motion:reduce){.zp0604 *,.zp0604 *::before,.zp0604 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0604 a,.zp0604 button,.zp0604 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav minimal"><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero mapHero"><div className="mapLines"><i/><i/><i/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Register now</a><a href="#services">Explore</a></div></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section menuSection"><div className="sectionTitle"><span>Selection</span><h2>Current favourites.</h2></div><div>{services.map((s,i)=><p key={s}><span>{s}</span><b>{i%2?"Seasonal":"Signature"}</b></p>)}</div></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Register now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Streetwear / research-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
