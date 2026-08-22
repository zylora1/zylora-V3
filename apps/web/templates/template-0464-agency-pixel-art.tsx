import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0464-agency-pixel-art", "family": "Pixel Art", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "centered-logo|asymmetric-editorial|booking-led|proof>menu>comparison>destinations>services>manifesto|heavy-frame|newspaper", "industry": "agency", "hero": "asymmetric-editorial", "navigation": "centered-logo", "layout": "booking-led"};

export default function Template0464({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Kite Creative Agency");
  const headline = String(content.headline || "Sharp strategy and distinctive creative work built to earn attention and action.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Brand strategy", "Web design", "Campaigns", "Content", "Production"];
  const industryLabel = "Creative agency";
  const serviceNotes = ["Strategy-led creative: we understand your market before designing anything.", "Integrated teams — strategy, design, and engineering in the same room.", "Brand systems that work across print, digital, and environmental without being rigid.", "Campaign measurement built in: we track outcomes, not just outputs.", "Retained partnerships with monthly delivery and quarterly direction reviews."];
  const proofPoints = ["D&AD and Cannes Lions awarded", "Average client tenure: 4.2 years", "ISO 27001 data security", "ISBA member"];
  const testimonial = "They killed our first concept because it wouldn't work — then delivered something far better. That's what a good agency does.";
  const team = [{"name": "Stone & Pine Lead", "role": "Principal / Lead"}, {"name": "Foxglove Team", "role": "Client experience"}, {"name": "Atlas Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Creative agency / Project A", "Creative agency / Project B", "Creative agency / Project C", "Creative agency / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Sharp strategy and distinctive creative work built to earn attention and action. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e8572a";
  return <main className="zp0464" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0464{--bg:#2b190f;--fg:#fff4df;--primary:#e8572a;--primary-fg:#050505;--secondary:#4e8f64;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:36px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0464 *{box-sizing:border-box}
.zp0464 a{color:inherit;text-decoration:none}
.zp0464 h1,.zp0464 h2,.zp0464 h3,.zp0464 blockquote{font-family:Times New Roman, serif;text-wrap:balance}
.zp0464 img{max-width:100%;display:block}
.zp0464 button,.zp0464 a{-webkit-tap-highlight-color:transparent}
.zp0464 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0464 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0464 .nav strong{font-family:Times New Roman, serif;font-size:18px}
.zp0464 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0464 .nav.centered strong{order:2;font-size:24px}
.zp0464 .nav.centered nav:first-child{order:1}
.zp0464 .nav.centered nav:last-child{order:3}
.zp0464 .mobileMenu{display:none}
.zp0464 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0464 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0464 .eyebrow,.zp0464 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0464 h1{font-size:clamp(48px,7.45vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0464 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0464 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0464 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0464 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0464 .visual,.zp0464 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0464 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0464 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(0deg)}
.zp0464 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0464 .heroPhoto{object-fit:cover}
.zp0464 .asymHero{grid-template-columns:0.85fr 1.15fr}
.zp0464 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0464 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0464 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0464 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0464 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0464 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0464 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0464 .serviceGrid p{color:var(--muted)}
.zp0464 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0464 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0464 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0464 details{border-top:1px solid var(--border);padding:20px 0}
.zp0464 details summary{font-weight:800;cursor:pointer}
.zp0464 details p{color:var(--muted);max-width:70ch}
.zp0464 .menuSection>div:last-child p{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0464 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Times New Roman, serif;letter-spacing:-.04em;max-width:17ch}
.zp0464 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0464 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0464 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0464 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0464 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0464 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0464 .contact .eyebrow{color:var(--bg)}
.zp0464 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0464 .contactMeta{display:grid;gap:10px}
.zp0464 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0464{image-rendering:pixelated}
.zp0464 *{border-radius:0!important}
.zp0464 .visual{background:repeating-linear-gradient(90deg,var(--surface) 0 8px,color-mix(in srgb,var(--primary) 40%,var(--surface)) 9px 10px)}
.zp0464 .heroCopy{animation:enter-463 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-463{from{opacity:0;transform:translateY(21px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0464 .hero{min-height:auto}
.zp0464 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0464 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0464 .nav nav{display:none}
.zp0464 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0464 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0464 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0464 .mobileMenu nav a{padding:10px 8px}
.zp0464 .hero,.zp0464 .asymHero{grid-template-columns:1fr}
.zp0464 .section,.zp0464 .sectionTitle,.zp0464 .contact{grid-template-columns:1fr}
.zp0464 .section{display:block}}
@media(max-width:430px){.zp0464{font-size:16px}
.zp0464 .hero,.zp0464 .section,.zp0464 .contact{padding-left:18px;padding-right:18px}
.zp0464 .serviceGrid,.zp0464 .proof,.zp0464 .destinations>div:last-child,.zp0464 .compareGrid{grid-template-columns:1fr}
.zp0464 h1{font-size:clamp(42px,14vw,70px)}}

.zp0464 .heroActions a,.zp0464 .primary,.zp0464 .ctaBtn,.zp0464 .btnPrimary,.zp0464 .schedule>a,.zp0464 .newsletter>a{transition:all .2s ease}
.zp0464 .heroActions a:hover,.zp0464 .primary:hover,.zp0464 .ctaBtn:hover,.zp0464 .btnPrimary:hover{
  image-rendering:pixelated;box-shadow:4px 4px 0 var(--primary)
}
.zp0464 nav a,.zp0464 .nav a,.zp0464 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0464 nav a:hover,.zp0464 .nav a:hover,.zp0464 .footer a:hover{
  color:var(--primary)
}
.zp0464 .serviceGrid article,.zp0464 .projectCard,.zp0464 .teamCard,.zp0464 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0464 .serviceGrid article:hover,.zp0464 .projectCard:hover,.zp0464 .teamCard:hover,.zp0464 .bentoCard:hover{
  box-shadow:4px 4px 0 var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0464 *,.zp0464 *::before,.zp0464 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0464 a,.zp0464 button,.zp0464 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav centered"><nav><a href="#services">Services</a></nav><strong>{businessName}</strong><nav><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero asymHero"><div className="heroNumber">05</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Register now</a><a href="#services">Explore</a></div></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">63</span><div className="visualMark"/><small>{businessName}</small></div>}</section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section menuSection"><div className="sectionTitle"><span>Selection</span><h2>Current favourites.</h2></div><div>{services.map((s,i)=><p key={s}><span>{s}</span><b>{i%2?"Seasonal":"Signature"}</b></p>)}</div></section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Register now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Pixel Art / booking-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
