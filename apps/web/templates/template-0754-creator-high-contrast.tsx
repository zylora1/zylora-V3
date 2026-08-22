import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0754-creator-high-contrast", "family": "High Contrast", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "tabbed|gallery-wall|local-service-map|services>story>gallery>proof>values|borderless|retro-bookish", "industry": "creator", "hero": "gallery-wall", "navigation": "tabbed", "layout": "local-service-map"};

export default function Template0754({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Signal Creator Brand");
  const headline = String(content.headline || "A clear home base for work, audience, collaborations, and owned distribution.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Latest work", "Partnerships", "Newsletter", "Resources", "Speaking"];
  const industryLabel = "Creator brand";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const storyQuote = "\u201cA clear home base for work, audience, collaborations, and owned distribution.\u201d";
  const storyBody = "Signal Creator Brand is presented as a real working creator brand, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Studio Nine Lead", "role": "Principal / Lead"}, {"name": "Foundry Team", "role": "Client experience"}, {"name": "Rook Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Creator brand / Project A", "Creator brand / Project B", "Creator brand / Project C", "Creator brand / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A clear home base for work, audience, collaborations, and owned distribution. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#81946f";
  return <main className="zp0754" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0754{--bg:#f4eee5;--fg:#302821;--primary:#81946f;--primary-fg:#050505;--secondary:#c55d4d;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:3px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:28px;background:var(--bg);color:var(--fg);font-family:Trebuchet MS, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0754 *{box-sizing:border-box}
.zp0754 a{color:inherit;text-decoration:none}
.zp0754 h1,.zp0754 h2,.zp0754 h3,.zp0754 blockquote{font-family:Bookman Old Style, Georgia, serif;text-wrap:balance}
.zp0754 img{max-width:100%;display:block}
.zp0754 button,.zp0754 a{-webkit-tap-highlight-color:transparent}
.zp0754 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0754 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0754 .nav strong{font-family:Bookman Old Style, Georgia, serif;font-size:18px}
.zp0754 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0754 .mobileMenu{display:none}
.zp0754 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0754 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0754 .eyebrow,.zp0754 .sectionTitle>span,.zp0754 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0754 h1{font-size:clamp(48px,7.45vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0754 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0754 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0754 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0754 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0754 .wallHero{grid-template-columns:1fr 1fr}
.zp0754 .wall{display:grid;grid-template-columns:1fr 1fr;gap:8px;transform:rotate(-3deg)}
.zp0754 .wall div{min-height:180px;background:color-mix(in srgb,var(--primary) 30%,var(--surface))}
.zp0754 .wall div:nth-child(2n){background:color-mix(in srgb,var(--secondary) 30%,var(--surface))}
.zp0754 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0754 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0754 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0754 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0754 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0754 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0754 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0754 .serviceGrid p{color:var(--muted)}
.zp0754 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0754 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0754 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0754 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0754 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0754 .story p{color:var(--muted)}
.zp0754 details{border-top:1px solid var(--border);padding:20px 0}
.zp0754 details summary{font-weight:800;cursor:pointer}
.zp0754 details p{color:var(--muted);max-width:70ch}
.zp0754 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0754 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0754 .galleryGrid>*:first-child{grid-row:1/3}
.zp0754 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0754 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0754 .g2,.zp0754 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0754 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Bookman Old Style, Georgia, serif;letter-spacing:-.04em;max-width:17ch}
.zp0754 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0754 .contact .eyebrow{color:var(--bg)}
.zp0754 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0754 .contactMeta{display:grid;gap:10px}
.zp0754 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0754 .heroCopy{animation:enter-753 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-753{from{opacity:0;transform:translateY(31px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0754 .hero{min-height:auto}
.zp0754 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0754 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0754 .nav nav{display:none}
.zp0754 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0754 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0754 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0754 .mobileMenu nav a{padding:10px 8px}
.zp0754 .hero,.zp0754 .wallHero{grid-template-columns:1fr}
.zp0754 .section,.zp0754 .sectionTitle,.zp0754 .story,.zp0754 .contact{grid-template-columns:1fr}
.zp0754 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0754 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0754 .section{display:block}}
@media(max-width:430px){.zp0754{font-size:16px}
.zp0754 .hero,.zp0754 .section,.zp0754 .contact{padding-left:18px;padding-right:18px}
.zp0754 .serviceGrid,.zp0754 .proof{grid-template-columns:1fr}
.zp0754 h1{font-size:clamp(42px,14vw,70px)}
.zp0754 .galleryGrid{grid-template-columns:1fr}
.zp0754 .galleryGrid>*:first-child{grid-column:auto}}

.zp0754 .heroActions a,.zp0754 .primary,.zp0754 .ctaBtn,.zp0754 .btnPrimary,.zp0754 .schedule>a,.zp0754 .newsletter>a{transition:all .2s ease}
.zp0754 .heroActions a:hover,.zp0754 .primary:hover,.zp0754 .ctaBtn:hover,.zp0754 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0754 nav a,.zp0754 .nav a,.zp0754 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0754 nav a:hover,.zp0754 .nav a:hover,.zp0754 .footer a:hover{
  color:var(--primary)
}
.zp0754 .serviceGrid article,.zp0754 .projectCard,.zp0754 .teamCard,.zp0754 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0754 .serviceGrid article:hover,.zp0754 .projectCard:hover,.zp0754 .teamCard:hover,.zp0754 .bentoCard:hover{
  box-shadow:0 0 0 3px var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0754 *,.zp0754 *::before,.zp0754 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0754 a,.zp0754 button,.zp0754 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav tabs"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero wallHero"><div className="wall"><div/><div/><div/><div/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a quote</a><a href="#services">Explore</a></div></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a quote</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>High Contrast / local-service-map</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
