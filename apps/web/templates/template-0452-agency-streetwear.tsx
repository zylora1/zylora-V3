import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0452-agency-streetwear", "family": "Streetwear", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "transparent-overlay|bento-hero|conversion-first|credentials>services>research>proof>materials>manifesto|cut-corners|product-ui", "industry": "agency", "hero": "bento-hero", "navigation": "transparent-overlay", "layout": "conversion-first"};

export default function Template0452({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Fieldwork Creative Agency");
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
  const team = [{"name": "Lumen Lead", "role": "Principal / Lead"}, {"name": "Juniper Team", "role": "Client experience"}, {"name": "Miller & Rowe Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Creative agency / Project A", "Creative agency / Project B", "Creative agency / Project C", "Creative agency / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Sharp strategy and distinctive creative work built to earn attention and action. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff3b30";
  return <main className="zp0452" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0452{--bg:#f7f7f7;--fg:#101010;--primary:#ff3b30;--primary-fg:#050505;--secondary:#2222aa;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:36px;background:var(--bg);color:var(--fg);font-family:Segoe UI, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0452 *{box-sizing:border-box}
.zp0452 a{color:inherit;text-decoration:none}
.zp0452 h1,.zp0452 h2,.zp0452 h3,.zp0452 blockquote{font-family:Segoe UI, Arial, sans-serif;text-wrap:balance}
.zp0452 img{max-width:100%;display:block}
.zp0452 button,.zp0452 a{-webkit-tap-highlight-color:transparent}
.zp0452 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0452 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0452 .nav strong{font-family:Segoe UI, Arial, sans-serif;font-size:18px}
.zp0452 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0452 .nav.overlay{position:absolute;inset:0 0 auto;background:linear-gradient(180deg,color-mix(in srgb,var(--bg) 76%,transparent),transparent);border:0}
.zp0452 .mobileMenu{display:none}
.zp0452 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0452 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0452 .eyebrow,.zp0452 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0452 h1{font-size:clamp(48px,6.35vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0452 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0452 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0452 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0452 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0452 .visual,.zp0452 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0452 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0452 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:2px;right:-8%;top:-18%;transform:rotate(-12deg)}
.zp0452 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0452 .heroPhoto{object-fit:cover}
.zp0452 .bentoHero{grid-template-columns:.8fr 1.2fr}
.zp0452 .bentoHeroGrid{display:grid;grid-template-columns:1.4fr .6fr;grid-template-rows:1fr 1fr;gap:12px}
.zp0452 .bentoHeroGrid>*{border:1px solid var(--border);border-radius:var(--radius);padding:18px}
.zp0452 .bentoHeroGrid>*:first-child{grid-row:1/3;padding:0;overflow:hidden}
.zp0452 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0452 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0452 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0452 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0452 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0452 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0452 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0452 .serviceGrid p{color:var(--muted)}
.zp0452 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0452 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0452 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0452 details{border-top:1px solid var(--border);padding:20px 0}
.zp0452 details summary{font-weight:800;cursor:pointer}
.zp0452 details p{color:var(--muted);max-width:70ch}
.zp0452 .credentials,.zp0452 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0452 .credentials>div,.zp0452 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0452 .credentials b,.zp0452 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0452 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Segoe UI, Arial, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0452 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0452 .researchRows{max-width:900px;margin-left:auto}
.zp0452 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0452 .contact .eyebrow{color:var(--bg)}
.zp0452 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0452 .contactMeta{display:grid;gap:10px}
.zp0452 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0452 .heroCopy{animation:enter-451 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-451{from{opacity:0;transform:translateY(29px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0452 .hero{min-height:auto}
.zp0452 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0452 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0452 .nav nav{display:none}
.zp0452 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0452 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0452 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0452 .mobileMenu nav a{padding:10px 8px}
.zp0452 .hero,.zp0452 .bentoHero{grid-template-columns:1fr}
.zp0452 .section,.zp0452 .sectionTitle,.zp0452 .contact{grid-template-columns:1fr}
.zp0452 .section{display:block}}
@media(max-width:430px){.zp0452{font-size:16px}
.zp0452 .hero,.zp0452 .section,.zp0452 .contact{padding-left:18px;padding-right:18px}
.zp0452 .serviceGrid,.zp0452 .proof{grid-template-columns:1fr}
.zp0452 h1{font-size:clamp(42px,14vw,70px)}}

.zp0452 .heroActions a,.zp0452 .primary,.zp0452 .ctaBtn,.zp0452 .btnPrimary,.zp0452 .schedule>a,.zp0452 .newsletter>a{transition:all .2s ease}
.zp0452 .heroActions a:hover,.zp0452 .primary:hover,.zp0452 .ctaBtn:hover,.zp0452 .btnPrimary:hover{
  background:var(--fg);color:var(--bg);transform:skewX(-2deg)
}
.zp0452 nav a,.zp0452 .nav a,.zp0452 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0452 nav a:hover,.zp0452 .nav a:hover,.zp0452 .footer a:hover{
  color:var(--primary)
}
.zp0452 .serviceGrid article,.zp0452 .projectCard,.zp0452 .teamCard,.zp0452 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0452 .serviceGrid article:hover,.zp0452 .projectCard:hover,.zp0452 .teamCard:hover,.zp0452 .bentoCard:hover{
  transform:skewX(-1deg)
}
@media(prefers-reduced-motion:reduce){.zp0452 *,.zp0452 *::before,.zp0452 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0452 a,.zp0452 button,.zp0452 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav overlay"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero bentoHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a demo</a><a href="#services">Explore</a></div></div><div className="bentoHeroGrid">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">51</span><div className="visualMark"/><small>{businessName}</small></div>}<div><b>{services[0]}</b></div><div><b>{services[1]}</b></div></div></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a demo</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Streetwear / conversion-first</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
