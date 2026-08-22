import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0813-nonprofit-museum-gallery", "family": "Museum Gallery", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "compact-floating|side-caption|architectural-grid|services>manifesto>newsletter>collection>materials>menu>proof|hard-outline|humanist-classic", "industry": "nonprofit", "hero": "side-caption", "navigation": "compact-floating", "layout": "architectural-grid"};

export default function Template0813({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Civic Nonprofit");
  const headline = String(content.headline || "A clear case for action, transparent impact, and simple ways to participate or give.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Programmes", "Impact", "Volunteer", "Donate", "Resources"];
  const industryLabel = "Nonprofit";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Kite Lead", "role": "Principal / Lead"}, {"name": "Pavilion Team", "role": "Client experience"}, {"name": "Bureau Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Nonprofit / Project A", "Nonprofit / Project B", "Nonprofit / Project C", "Nonprofit / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A clear case for action, transparent impact, and simple ways to participate or give. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#7a46ff";
  return <main className="zp0813" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0813{--bg:#f6f1ff;--fg:#241837;--primary:#7a46ff;--primary-fg:#ffffff;--secondary:#f179c6;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:0px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:24px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0813 *{box-sizing:border-box}
.zp0813 a{color:inherit;text-decoration:none}
.zp0813 h1,.zp0813 h2,.zp0813 h3,.zp0813 blockquote{font-family:Baskerville, Georgia, serif;text-wrap:balance}
.zp0813 img{max-width:100%;display:block}
.zp0813 button,.zp0813 a{-webkit-tap-highlight-color:transparent}
.zp0813 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0813 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0813 .nav strong{font-family:Baskerville, Georgia, serif;font-size:18px}
.zp0813 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0813 .nav.floating{margin:16px auto;width:min(calc(100% - 32px),var(--max));border:var(--line) solid var(--border);border-radius:999px;background:color-mix(in srgb,var(--bg) 88%,transparent);backdrop-filter:blur(16px);padding:12px 22px}
.zp0813 .mobileMenu{display:none}
.zp0813 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0813 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0813 .eyebrow,.zp0813 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0813 h1{font-size:clamp(48px,6.9vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0813 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0813 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0813 .heroActions a,.zp0813 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0813 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0813 .visual,.zp0813 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0813 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0813 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(-8deg)}
.zp0813 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0813 .heroPhoto{object-fit:cover}
.zp0813 .captionHero{grid-template-columns:1.15fr .85fr}
.zp0813 .captionHero{grid-template-columns:.18fr .82fr 1fr}
.zp0813 .captionHero aside{display:flex;justify-content:space-between;writing-mode:vertical-rl;transform:rotate(180deg)}
.zp0813 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0813 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0813 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0813 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0813 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0813 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0813 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0813 .serviceGrid p{color:var(--muted)}
.zp0813 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0813 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0813 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0813 details{border-top:1px solid var(--border);padding:20px 0}
.zp0813 details summary{font-weight:800;cursor:pointer}
.zp0813 details p{color:var(--muted);max-width:70ch}
.zp0813 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0813 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0813 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0813 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0813 .menuSection>div:last-child p{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0813 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0813 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0813 .p1,.zp0813 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0813 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Baskerville, Georgia, serif;letter-spacing:-.04em;max-width:17ch}
.zp0813 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0813 .contact .eyebrow{color:var(--bg)}
.zp0813 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0813 .contactMeta{display:grid;gap:10px}
.zp0813 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0813 .heroCopy{animation:enter-812 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-812{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0813 .hero{min-height:auto}
.zp0813 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0813 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0813 .nav nav{display:none}
.zp0813 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0813 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0813 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0813 .mobileMenu nav a{padding:10px 8px}
.zp0813 .hero,.zp0813 .captionHero{grid-template-columns:1fr}
.zp0813 .section,.zp0813 .sectionTitle,.zp0813 .contact{grid-template-columns:1fr}
.zp0813 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0813 .section{display:block}}
@media(max-width:430px){.zp0813{font-size:16px}
.zp0813 .hero,.zp0813 .section,.zp0813 .contact{padding-left:18px;padding-right:18px}
.zp0813 .serviceGrid,.zp0813 .proof,.zp0813 .collectionGrid{grid-template-columns:1fr}
.zp0813 h1{font-size:clamp(42px,14vw,70px)}}

.zp0813 .heroActions a,.zp0813 .primary,.zp0813 .ctaBtn,.zp0813 .btnPrimary,.zp0813 .schedule>a,.zp0813 .newsletter>a{transition:all .2s ease}
.zp0813 .heroActions a:hover,.zp0813 .primary:hover,.zp0813 .ctaBtn:hover,.zp0813 .btnPrimary:hover{
  opacity:.85;letter-spacing:.06em
}
.zp0813 nav a,.zp0813 .nav a,.zp0813 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0813 nav a:hover,.zp0813 .nav a:hover,.zp0813 .footer a:hover{
  opacity:.7
}
.zp0813 .serviceGrid article,.zp0813 .projectCard,.zp0813 .teamCard,.zp0813 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0813 .serviceGrid article:hover,.zp0813 .projectCard:hover,.zp0813 .teamCard:hover,.zp0813 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0813 *,.zp0813 *::before,.zp0813 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0813 a,.zp0813 button,.zp0813 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav floating"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero captionHero"><aside><span>{industryLabel}</span><span>Independent</span></aside>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">12</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Book an appointment</a><a href="#services">Explore</a></div></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section menuSection"><div className="sectionTitle"><span>Selection</span><h2>Current favourites.</h2></div><div>{services.map((s,i)=><p key={s}><span>{s}</span><b>{i%2?"Seasonal":"Signature"}</b></p>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Book an appointment</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Museum Gallery / architectural-grid</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
