import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-1005-professional-retro-computing", "family": "Retro Computing", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "compact-floating|side-caption|split-scroll|menu>newsletter>credentials>values>services>proof>schedule|hard-outline|humanist-classic", "industry": "professional", "hero": "side-caption", "navigation": "compact-floating", "layout": "split-scroll"};

export default function Template1005({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Civic Professional Services");
  const headline = String(content.headline || "Senior expertise delivered with clear scope, useful communication, and practical outcomes.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Advisory", "Assessment", "Implementation", "Retainers", "Workshops"];
  const industryLabel = "Professional services";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Kite Lead", "role": "Principal / Lead"}, {"name": "Pavilion Team", "role": "Client experience"}, {"name": "Bureau Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Professional services / Project A", "Professional services / Project B", "Professional services / Project C", "Professional services / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Senior expertise delivered with clear scope, useful communication, and practical outcomes. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e27d60";
  return <main className="zp1005" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp1005{--bg:#fef7f1;--fg:#2c2320;--primary:#e27d60;--primary-fg:#050505;--secondary:#85a9a0;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:24px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp1005 *{box-sizing:border-box}
.zp1005 a{color:inherit;text-decoration:none}
.zp1005 h1,.zp1005 h2,.zp1005 h3,.zp1005 blockquote{font-family:Baskerville, Georgia, serif;text-wrap:balance}
.zp1005 img{max-width:100%;display:block}
.zp1005 button,.zp1005 a{-webkit-tap-highlight-color:transparent}
.zp1005 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp1005 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp1005 .nav strong{font-family:Baskerville, Georgia, serif;font-size:18px}
.zp1005 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp1005 .nav.floating{margin:16px auto;width:min(calc(100% - 32px),var(--max));border:var(--line) solid var(--border);border-radius:999px;background:color-mix(in srgb,var(--bg) 88%,transparent);backdrop-filter:blur(16px);padding:12px 22px}
.zp1005 .mobileMenu{display:none}
.zp1005 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp1005 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp1005 .eyebrow,.zp1005 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp1005 h1{font-size:clamp(48px,8.0vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp1005 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp1005 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp1005 .heroActions a,.zp1005 .schedule>a,.zp1005 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp1005 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp1005 .visual,.zp1005 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp1005 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp1005 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(4deg)}
.zp1005 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp1005 .heroPhoto{object-fit:cover}
.zp1005 .captionHero{grid-template-columns:1.15fr .85fr}
.zp1005 .captionHero{grid-template-columns:.18fr .82fr 1fr}
.zp1005 .captionHero aside{display:flex;justify-content:space-between;writing-mode:vertical-rl;transform:rotate(180deg)}
.zp1005 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp1005 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp1005 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp1005 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp1005 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp1005 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp1005 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp1005 .serviceGrid p{color:var(--muted)}
.zp1005 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp1005 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp1005 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp1005 details{border-top:1px solid var(--border);padding:20px 0}
.zp1005 details summary{font-weight:800;cursor:pointer}
.zp1005 details p{color:var(--muted);max-width:70ch}
.zp1005 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp1005 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp1005 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp1005 .schedule,.zp1005 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp1005 .menuSection>div:last-child p{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--border)}
.zp1005 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Baskerville, Georgia, serif;letter-spacing:-.04em;max-width:17ch}
.zp1005 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp1005 .contact .eyebrow{color:var(--bg)}
.zp1005 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp1005 .contactMeta{display:grid;gap:10px}
.zp1005 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp1005{image-rendering:pixelated}
.zp1005 *{border-radius:0!important}
.zp1005 .visual{background:repeating-linear-gradient(90deg,var(--surface) 0 8px,color-mix(in srgb,var(--primary) 40%,var(--surface)) 9px 10px)}
.zp1005 .heroCopy{animation:enter-1004 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-1004{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp1005 .hero{min-height:auto}
.zp1005 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp1005 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp1005 .nav nav{display:none}
.zp1005 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp1005 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp1005 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp1005 .mobileMenu nav a{padding:10px 8px}
.zp1005 .hero,.zp1005 .captionHero{grid-template-columns:1fr}
.zp1005 .section,.zp1005 .sectionTitle,.zp1005 .contact{grid-template-columns:1fr}
.zp1005 .section{display:block}}
@media(max-width:430px){.zp1005{font-size:16px}
.zp1005 .hero,.zp1005 .section,.zp1005 .contact{padding-left:18px;padding-right:18px}
.zp1005 .serviceGrid,.zp1005 .proof{grid-template-columns:1fr}
.zp1005 h1{font-size:clamp(42px,14vw,70px)}}

.zp1005 .heroActions a,.zp1005 .primary,.zp1005 .ctaBtn,.zp1005 .btnPrimary,.zp1005 .schedule>a,.zp1005 .newsletter>a{transition:all .2s ease}
.zp1005 .heroActions a:hover,.zp1005 .primary:hover,.zp1005 .ctaBtn:hover,.zp1005 .btnPrimary:hover{
  border-color:var(--primary);color:var(--primary)
}
.zp1005 nav a,.zp1005 .nav a,.zp1005 .footer a{transition:opacity .15s ease,color .15s ease}
.zp1005 nav a:hover,.zp1005 .nav a:hover,.zp1005 .footer a:hover{
  color:var(--primary)
}
.zp1005 .serviceGrid article,.zp1005 .projectCard,.zp1005 .teamCard,.zp1005 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp1005 .serviceGrid article:hover,.zp1005 .projectCard:hover,.zp1005 .teamCard:hover,.zp1005 .bentoCard:hover{
  border-color:var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp1005 *,.zp1005 *::before,.zp1005 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp1005 a,.zp1005 button,.zp1005 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav floating"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero captionHero"><aside><span>{industryLabel}</span><span>Independent</span></aside>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">04</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Send an enquiry</a><a href="#services">Explore</a></div></div></section>
    <section className="section menuSection"><div className="sectionTitle"><span>Selection</span><h2>Current favourites.</h2></div><div>{services.map((s,i)=><p key={s}><span>{s}</span><b>{i%2?"Seasonal":"Signature"}</b></p>)}</div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Send an enquiry</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Retro Computing / split-scroll</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
