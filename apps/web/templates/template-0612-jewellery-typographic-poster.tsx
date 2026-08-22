import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0612-jewellery-typographic-poster", "family": "Typographic Poster", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "transparent-overlay|bento-hero|catalogue-table|hours>security>proof>materials>services>newsletter>menu|cut-corners|literary", "industry": "jewellery", "hero": "bento-hero", "navigation": "transparent-overlay", "layout": "catalogue-table"};

export default function Template0612({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Fieldwork Jewellery Studio");
  const headline = String(content.headline || "Fine pieces designed for daily wear, milestones, and a lifetime beyond the first moment.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Fine jewellery", "Engagement", "Bespoke", "Repairs", "Private viewings"];
  const industryLabel = "Jewellery studio";
  const serviceNotes = ["Bespoke commissions from sketch to setting — your brief, your story, our craft.", "Ethically sourced gemstones with Kimberley Process certification as standard.", "In-house goldsmith: repairs, resizing, and remounting while you wait in most cases.", "Valuation service for insurance and probate, issued on headed paper.", "Engraving available on most pieces — personal inscriptions completed in-house."];
  const proofPoints = ["NAJ member", "Hallmarked at Birmingham Assay", "Lifetime warranty on settings", "Conflict-free certification"];
  const testimonial = "They remodelled my grandmother's ring into something I actually wear every day. The craftsmanship is extraordinary.";
  const team = [{"name": "Lumen Lead", "role": "Principal / Lead"}, {"name": "Juniper Team", "role": "Client experience"}, {"name": "Miller & Rowe Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Jewellery studio / Project A", "Jewellery studio / Project B", "Jewellery studio / Project C", "Jewellery studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Fine pieces designed for daily wear, milestones, and a lifetime beyond the first moment. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff3b30";
  return <main className="zp0612" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0612{--bg:#f7f7f7;--fg:#101010;--primary:#ff3b30;--primary-fg:#050505;--secondary:#2222aa;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:3px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:36px;background:var(--bg);color:var(--fg);font-family:Helvetica Neue, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0612 *{box-sizing:border-box}
.zp0612 a{color:inherit;text-decoration:none}
.zp0612 h1,.zp0612 h2,.zp0612 h3,.zp0612 blockquote{font-family:Garamond, Georgia, serif;text-wrap:balance}
.zp0612 img{max-width:100%;display:block}
.zp0612 button,.zp0612 a{-webkit-tap-highlight-color:transparent}
.zp0612 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0612 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0612 .nav strong{font-family:Garamond, Georgia, serif;font-size:18px}
.zp0612 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0612 .nav.overlay{position:absolute;inset:0 0 auto;background:linear-gradient(180deg,color-mix(in srgb,var(--bg) 76%,transparent),transparent);border:0}
.zp0612 .mobileMenu{display:none}
.zp0612 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0612 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0612 .eyebrow,.zp0612 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0612 h1{font-size:clamp(48px,6.35vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0612 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0612 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0612 .heroActions a,.zp0612 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0612 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0612 .visual,.zp0612 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0612 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0612 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:2px;right:-8%;top:-18%;transform:rotate(16deg)}
.zp0612 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0612 .heroPhoto{object-fit:cover}
.zp0612 .bentoHero{grid-template-columns:.8fr 1.2fr}
.zp0612 .bentoHeroGrid{display:grid;grid-template-columns:1.4fr .6fr;grid-template-rows:1fr 1fr;gap:12px}
.zp0612 .bentoHeroGrid>*{border:1px solid var(--border);border-radius:var(--radius);padding:18px}
.zp0612 .bentoHeroGrid>*:first-child{grid-row:1/3;padding:0;overflow:hidden}
.zp0612 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0612 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0612 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0612 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0612 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0612 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0612 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0612 .serviceGrid p{color:var(--muted)}
.zp0612 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0612 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0612 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0612 details{border-top:1px solid var(--border);padding:20px 0}
.zp0612 details summary{font-weight:800;cursor:pointer}
.zp0612 details p{color:var(--muted);max-width:70ch}
.zp0612 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0612 .hours dl{margin:0}
.zp0612 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0612 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0612 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0612 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0612 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0612 .menuSection>div:last-child p{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0612 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0612 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0612 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0612 .contact .eyebrow{color:var(--bg)}
.zp0612 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0612 .contactMeta{display:grid;gap:10px}
.zp0612 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0612 .heroCopy{animation:enter-611 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-611{from{opacity:0;transform:translateY(29px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0612 .hero{min-height:auto}
.zp0612 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0612 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0612 .nav nav{display:none}
.zp0612 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0612 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0612 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0612 .mobileMenu nav a{padding:10px 8px}
.zp0612 .hero,.zp0612 .bentoHero{grid-template-columns:1fr}
.zp0612 .section,.zp0612 .sectionTitle,.zp0612 .hours,.zp0612 .security,.zp0612 .contact{grid-template-columns:1fr}
.zp0612 .section{display:block}}
@media(max-width:430px){.zp0612{font-size:16px}
.zp0612 .hero,.zp0612 .section,.zp0612 .contact{padding-left:18px;padding-right:18px}
.zp0612 .serviceGrid,.zp0612 .proof{grid-template-columns:1fr}
.zp0612 h1{font-size:clamp(42px,14vw,70px)}}

.zp0612 .heroActions a,.zp0612 .primary,.zp0612 .ctaBtn,.zp0612 .btnPrimary,.zp0612 .schedule>a,.zp0612 .newsletter>a{transition:all .2s ease}
.zp0612 .heroActions a:hover,.zp0612 .primary:hover,.zp0612 .ctaBtn:hover,.zp0612 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0612 nav a,.zp0612 .nav a,.zp0612 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0612 nav a:hover,.zp0612 .nav a:hover,.zp0612 .footer a:hover{
  color:var(--primary)
}
.zp0612 .serviceGrid article,.zp0612 .projectCard,.zp0612 .teamCard,.zp0612 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0612 .serviceGrid article:hover,.zp0612 .projectCard:hover,.zp0612 .teamCard:hover,.zp0612 .bentoCard:hover{
  background:var(--surface)
}
@media(prefers-reduced-motion:reduce){.zp0612 *,.zp0612 *::before,.zp0612 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0612 a,.zp0612 button,.zp0612 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav overlay"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero bentoHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">View selected work</a><a href="#services">Explore</a></div></div><div className="bentoHeroGrid">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">11</span><div className="visualMark"/><small>{businessName}</small></div>}<div><b>{services[0]}</b></div><div><b>{services[1]}</b></div></div></section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section menuSection"><div className="sectionTitle"><span>Selection</span><h2>Current favourites.</h2></div><div>{services.map((s,i)=><p key={s}><span>{s}</span><b>{i%2?"Seasonal":"Signature"}</b></p>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>View selected work</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Typographic Poster / catalogue-table</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
