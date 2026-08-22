import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0821-community-monochrome", "family": "Monochrome", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "lower-third|image-collage|gallery-index|location>security>proof>pricing>products>services|ticket-edge|condensed-editorial", "industry": "community", "hero": "image-collage", "navigation": "lower-third", "layout": "gallery-index"};

export default function Template0821({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Studio Nine Community Organization");
  const headline = String(content.headline || "A welcoming hub for people, events, shared resources, and practical participation.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Events", "Membership", "Directory", "Resources", "Volunteer"];
  const industryLabel = "Community organization";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Bureau Lead", "role": "Principal / Lead"}, {"name": "Elm Team", "role": "Client experience"}, {"name": "Marrow Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Community organization / Project A", "Community organization / Project B", "Community organization / Project C", "Community organization / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A welcoming hub for people, events, shared resources, and practical participation. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ffcc33";
  return <main className="zp0821" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0821{--bg:#101218;--fg:#f7f5f0;--primary:#ffcc33;--primary-fg:#050505;--secondary:#3f7cff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:8px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:24px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0821 *{box-sizing:border-box}
.zp0821 a{color:inherit;text-decoration:none}
.zp0821 h1,.zp0821 h2,.zp0821 h3,.zp0821 blockquote{font-family:Arial Narrow, Arial, sans-serif;text-wrap:balance}
.zp0821 img{max-width:100%;display:block}
.zp0821 button,.zp0821 a{-webkit-tap-highlight-color:transparent}
.zp0821 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0821 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0821 .nav strong{font-family:Arial Narrow, Arial, sans-serif;font-size:18px}
.zp0821 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0821 .nav.lower{position:absolute;top:auto;bottom:0;width:100%;border-top:var(--line) solid var(--border)}
.zp0821 .mobileMenu{display:none}
.zp0821 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0821 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0821 .eyebrow,.zp0821 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0821 h1{font-size:clamp(48px,5.8vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0821 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0821 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0821 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0821 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0821 .visual,.zp0821 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0821 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0821 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:8px;right:-8%;top:-18%;transform:rotate(-12deg)}
.zp0821 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0821 .heroPhoto{object-fit:cover}
.zp0821 .collageHero{grid-template-columns:.8fr 1.2fr}
.zp0821 .collage{display:grid;grid-template-columns:1.2fr .6fr;grid-template-rows:1fr 1fr;gap:12px}
.zp0821 .collage>*:first-child{grid-row:1/3}
.zp0821 .miniVisual{background:var(--primary);border-radius:var(--radius)}
.zp0821 .miniVisual.alt{background:var(--secondary)}
.zp0821 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0821 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0821 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0821 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0821 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0821 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0821 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0821 .serviceGrid p{color:var(--muted)}
.zp0821 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0821 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0821 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0821 details{border-top:1px solid var(--border);padding:20px 0}
.zp0821 details summary{font-weight:800;cursor:pointer}
.zp0821 details p{color:var(--muted);max-width:70ch}
.zp0821 .priceRows{border-top:1px solid var(--border)}
.zp0821 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0821 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0821 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0821 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0821 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0821 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0821 .p1,.zp0821 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0821 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0821 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0821 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0821 .contact .eyebrow{color:var(--bg)}
.zp0821 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0821 .contactMeta{display:grid;gap:10px}
.zp0821 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0821 .heroCopy{animation:enter-820 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-820{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0821 .hero{min-height:auto}
.zp0821 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0821 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0821 .nav nav{display:none}
.zp0821 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0821 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0821 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0821 .mobileMenu nav a{padding:10px 8px}
.zp0821 .hero,.zp0821 .collageHero{grid-template-columns:1fr}
.zp0821 .section,.zp0821 .sectionTitle,.zp0821 .location,.zp0821 .security,.zp0821 .contact{grid-template-columns:1fr}
.zp0821 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0821 .section{display:block}}
@media(max-width:430px){.zp0821{font-size:16px}
.zp0821 .hero,.zp0821 .section,.zp0821 .contact{padding-left:18px;padding-right:18px}
.zp0821 .serviceGrid,.zp0821 .proof,.zp0821 .collectionGrid{grid-template-columns:1fr}
.zp0821 h1{font-size:clamp(42px,14vw,70px)}
.zp0821 .priceRows article{grid-template-columns:1fr}}

.zp0821 .heroActions a,.zp0821 .primary,.zp0821 .ctaBtn,.zp0821 .btnPrimary,.zp0821 .schedule>a,.zp0821 .newsletter>a{transition:all .2s ease}
.zp0821 .heroActions a:hover,.zp0821 .primary:hover,.zp0821 .ctaBtn:hover,.zp0821 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0821 nav a,.zp0821 .nav a,.zp0821 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0821 nav a:hover,.zp0821 .nav a:hover,.zp0821 .footer a:hover{
  color:var(--secondary)
}
.zp0821 .serviceGrid article,.zp0821 .projectCard,.zp0821 .teamCard,.zp0821 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0821 .serviceGrid article:hover,.zp0821 .projectCard:hover,.zp0821 .teamCard:hover,.zp0821 .bentoCard:hover{
  background:var(--surface)
}
@media(prefers-reduced-motion:reduce){.zp0821 *,.zp0821 *::before,.zp0821 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0821 a,.zp0821 button,.zp0821 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav lower"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero collageHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Call us</a><a href="#services">Explore</a></div></div><div className="collage">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">20</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="miniVisual"/><div className="miniVisual alt"/></div></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Call us</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Monochrome / gallery-index</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
