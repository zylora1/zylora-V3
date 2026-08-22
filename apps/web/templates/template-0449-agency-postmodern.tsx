import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0449-agency-postmodern", "family": "Postmodern", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "classic-horizontal|typography-only|case-study-led|metrics>gallery>proof>services>timeline>story|square-editorial|friendly", "industry": "agency", "hero": "typography-only", "navigation": "classic-horizontal", "layout": "case-study-led"};

export default function Template0449({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Northline Creative Agency");
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
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["D&AD and Cannes Lions awarded", "Average client tenure: 4.2 years", "ISO 27001 data security", "ISBA member"];
  const storyQuote = "\u201cSharp strategy and distinctive creative work built to earn attention and action.\u201d";
  const storyBody = "Northline Creative Agency is presented as a real working creative agency, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "They killed our first concept because it wouldn't work — then delivered something far better. That's what a good agency does.";
  const team = [{"name": "Fieldwork Lead", "role": "Principal / Lead"}, {"name": "Common Team", "role": "Client experience"}, {"name": "Stillwater Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Creative agency / Project A", "Creative agency / Project B", "Creative agency / Project C", "Creative agency / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Sharp strategy and distinctive creative work built to earn attention and action. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#7f9cff";
  return <main className="zp0449" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0449{--bg:#10151c;--fg:#edf3f8;--primary:#7f9cff;--primary-fg:#050505;--secondary:#a0e36d;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:24px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0449 *{box-sizing:border-box}
.zp0449 a{color:inherit;text-decoration:none}
.zp0449 h1,.zp0449 h2,.zp0449 h3,.zp0449 blockquote{font-family:Trebuchet MS, Arial, sans-serif;text-wrap:balance}
.zp0449 img{max-width:100%;display:block}
.zp0449 button,.zp0449 a{-webkit-tap-highlight-color:transparent}
.zp0449 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0449 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0449 .nav strong{font-family:Trebuchet MS, Arial, sans-serif;font-size:18px}
.zp0449 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0449 .mobileMenu{display:none}
.zp0449 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0449 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0449 .eyebrow,.zp0449 .sectionTitle>span,.zp0449 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0449 h1{font-size:clamp(48px,7.45vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0449 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0449 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0449 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0449 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0449 .typeOnly{grid-template-columns:1fr .28fr}
.zp0449 .oversizeWord{font-family:Trebuchet MS, Arial, sans-serif;font-size:min(38vw,520px);line-height:.7;color:var(--primary);opacity:.14;justify-self:end}
.zp0449 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0449 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0449 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0449 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0449 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0449 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0449 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0449 .serviceGrid p{color:var(--muted)}
.zp0449 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0449 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0449 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0449 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0449 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0449 .story p{color:var(--muted)}
.zp0449 details{border-top:1px solid var(--border);padding:20px 0}
.zp0449 details summary{font-weight:800;cursor:pointer}
.zp0449 details p{color:var(--muted);max-width:70ch}
.zp0449 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0449 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0449 .galleryGrid>*:first-child{grid-row:1/3}
.zp0449 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0449 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0449 .g2,.zp0449 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0449 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0449 .metrics div{background:var(--bg);padding:30px}
.zp0449 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Trebuchet MS, Arial, sans-serif;color:var(--primary)}
.zp0449 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0449 .timeline article{padding:20px 0}
.zp0449 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0449 .contact .eyebrow{color:var(--bg)}
.zp0449 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0449 .contactMeta{display:grid;gap:10px}
.zp0449 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0449 .heroCopy{animation:enter-448 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-448{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0449 .hero{min-height:auto}
.zp0449 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0449 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0449 .nav nav{display:none}
.zp0449 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0449 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0449 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0449 .mobileMenu nav a{padding:10px 8px}
.zp0449 .hero{grid-template-columns:1fr}
.zp0449 .section,.zp0449 .sectionTitle,.zp0449 .story,.zp0449 .contact{grid-template-columns:1fr}
.zp0449 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0449 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0449 .metrics{grid-template-columns:1fr 1fr}
.zp0449 .section{display:block}}
@media(max-width:430px){.zp0449{font-size:16px}
.zp0449 .hero,.zp0449 .section,.zp0449 .contact{padding-left:18px;padding-right:18px}
.zp0449 .serviceGrid,.zp0449 .proof,.zp0449 .metrics{grid-template-columns:1fr}
.zp0449 h1{font-size:clamp(42px,14vw,70px)}
.zp0449 .galleryGrid{grid-template-columns:1fr}
.zp0449 .galleryGrid>*:first-child{grid-column:auto}}

.zp0449 .heroActions a,.zp0449 .primary,.zp0449 .ctaBtn,.zp0449 .btnPrimary,.zp0449 .schedule>a,.zp0449 .newsletter>a{transition:all .2s ease}
.zp0449 .heroActions a:hover,.zp0449 .primary:hover,.zp0449 .ctaBtn:hover,.zp0449 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0449 nav a,.zp0449 .nav a,.zp0449 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0449 nav a:hover,.zp0449 .nav a:hover,.zp0449 .footer a:hover{
  color:var(--primary)
}
.zp0449 .serviceGrid article,.zp0449 .projectCard,.zp0449 .teamCard,.zp0449 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0449 .serviceGrid article:hover,.zp0449 .projectCard:hover,.zp0449 .teamCard:hover,.zp0449 .bentoCard:hover{
  transform:rotate(-1deg)
}
@media(prefers-reduced-motion:reduce){.zp0449 *,.zp0449 *::before,.zp0449 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0449 a,.zp0449 button,.zp0449 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero typeOnly"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Book an appointment</a><a href="#services">Explore</a></div></div><div className="oversizeWord">{businessName.slice(0,1)}</div></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Book an appointment</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Postmodern / case-study-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
